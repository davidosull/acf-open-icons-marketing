import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject') || '';
    const message = formData.get('message');

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare form data for Netlify Forms
    const netlifyFormData = new URLSearchParams();
    netlifyFormData.append('form-name', 'contact');
    netlifyFormData.append('name', name as string);
    netlifyFormData.append('email', email as string);
    if (subject) {
      netlifyFormData.append('subject', subject as string);
    }
    netlifyFormData.append('message', message as string);

    // Submit to Netlify Forms endpoint
    // Netlify Forms automatically handles POST requests to / with form-name
    // We'll submit to the site's root which Netlify will process
    const siteUrl =
      process.env.NETLIFY_URL ||
      process.env.URL ||
      process.env.DEPLOY_PRIME_URL ||
      'http://localhost:3000';

    const response = await fetch(`${siteUrl}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: netlifyFormData.toString(),
    });

    if (response.ok || response.status === 302) {
      // Netlify Forms returns 302 redirect on success
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: response.status }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

