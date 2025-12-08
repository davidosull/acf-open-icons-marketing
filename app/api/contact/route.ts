import { NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Simple in-memory rate limiting (for serverless environments)
// In production, consider using Redis or a database for distributed rate limiting
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

/**
 * Rate limiting: Max 3 submissions per IP per hour
 */
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const oneHour = 60 * 60 * 1000;
  const maxRequests = 3;

  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    // New IP or reset period expired
    rateLimitMap.set(ip, { count: 1, resetAt: now + oneHour });
    return true;
  }

  if (record.count >= maxRequests) {
    return false; // Rate limit exceeded
  }

  record.count++;
  return true;
}

/**
 * Get client IP address from request
 */
function getClientIP(request: Request): string {
  // Check various headers that proxies/load balancers use
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  const realIP = request.headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }

  // Fallback (won't work in serverless, but good for local dev)
  return 'unknown';
}

/**
 * Basic spam detection patterns
 */
function containsSpamPatterns(text: string): boolean {
  const spamPatterns = [
    /\b(viagra|cialis|casino|poker|lottery|winner|prize|free money)\b/i,
    /\b(buy now|click here|limited time|act now|urgent)\b/i,
    /(http|https|www\.)[^\s]{20,}/gi, // Long URLs
    /[A-Z]{10,}/g, // Excessive caps
    /[!]{3,}/g, // Multiple exclamation marks
  ];

  return spamPatterns.some((pattern) => pattern.test(text));
}

/**
 * Send email notification using AWS SES
 */
async function sendEmailNotification(data: ContactFormData): Promise<void> {
  // Use custom env var names to avoid Netlify reserved variables
  const accessKeyId = process.env.SES_ACCESS_KEY_ID || process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.SES_SECRET_ACCESS_KEY || process.env.AWS_SECRET_ACCESS_KEY;
  const region = process.env.SES_REGION || process.env.AWS_REGION || 'us-east-1';

  if (!accessKeyId || !secretAccessKey) {
    throw new Error('AWS credentials not configured');
  }

  const sesClient = new SESClient({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || 'support@acfopenicons.com';
  const toEmail = process.env.CONTACT_EMAIL || 'support@acfopenicons.com';
  const subject = data.subject
    ? `ACF OI - ${data.subject}`
    : 'ACF OI - Enquiry';

  const htmlBody = `
    <p><strong>Name</strong></p>
    <p>${escapeHtml(data.name)}</p>
    <p><strong>Email</strong></p>
    <p>${escapeHtml(data.email)}</p>
    <p><strong>Message</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, '<br>')}</p>
  `;

  const textBody = `
Name
${data.name}

Email
${data.email}

Message
${data.message}
  `;

  const command = new SendEmailCommand({
    Source: fromEmail,
    Destination: {
      ToAddresses: [toEmail],
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: 'UTF-8',
      },
      Body: {
        Html: {
          Data: htmlBody,
          Charset: 'UTF-8',
        },
        Text: {
          Data: textBody,
          Charset: 'UTF-8',
        },
      },
    },
  });

  await sesClient.send(command);
}

/**
 * Send form data to n8n webhook
 */
async function sendToN8N(data: ContactFormData): Promise<void> {
  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (!webhookUrl) {
    return; // Webhook is optional
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      console.error(
        `N8N webhook error: ${response.status} ${response.statusText}`
      );
    }
  } catch (error) {
    // Log error but don't fail the request if webhook fails
    console.error('Failed to send to n8n webhook:', error);
  }
}

/**
 * Escape HTML to prevent XSS attacks
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function POST(request: Request) {
  try {
    // Rate limiting check
    const clientIP = getClientIP(request);
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject') || '';
    const message = formData.get('message');
    const honeypot = formData.get('website'); // Honeypot field

    // Honeypot check - if this field is filled, it's a bot
    if (honeypot && honeypot.toString().trim() !== '') {
      console.warn('Honeypot triggered, likely bot submission');
      // Return success to bot, but don't send email
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic spam pattern detection
    const fullText = `${name} ${email} ${subject} ${message}`.toLowerCase();
    if (containsSpamPatterns(fullText)) {
      console.warn('Spam patterns detected in submission');
      return NextResponse.json(
        { error: 'Invalid submission detected.' },
        { status: 400 }
      );
    }

    // Additional validation
    const nameStr = name.toString().trim();
    const emailStr = email.toString().trim();
    const messageStr = message.toString().trim();

    // Check for reasonable length limits
    if (nameStr.length > 100 || emailStr.length > 255 || messageStr.length > 5000) {
      return NextResponse.json(
        { error: 'Field length exceeds maximum allowed.' },
        { status: 400 }
      );
    }

    // Validate email format more strictly
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailStr)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    const submissionData: ContactFormData = {
      name: nameStr,
      email: emailStr,
      subject: subject.toString().trim(),
      message: messageStr,
    };

    // Send email notification (required - will throw if fails)
    await sendEmailNotification(submissionData);

    // Send to n8n webhook (optional - errors are logged but don't fail request)
    await sendToN8N(submissionData);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);

    // Provide more detailed error in development
    const errorMessage =
      process.env.NODE_ENV === 'development'
        ? error instanceof Error
          ? error.message
          : 'Internal server error'
        : 'Internal server error';

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

