// Adapted for ACF Open Icons contact form
// Based on working KatoSync structure

let formData = $input.first().json;

// Extract from body (n8n webhook wraps data in body)
let name = '';
let email = '';
let subject = '';
let message = '';

if (formData.body) {
  const data = formData.body;
  name = data.name || '';
  email = data.email || '';
  subject = data.subject || '';
  message = data.message || '';
}

// Format timestamp in GMT
let timestamp;
if (formData.body && formData.body.timestamp) {
  timestamp = new Date(formData.body.timestamp).toLocaleString('en-GB', {
    timeZone: 'GMT',
    dateStyle: 'medium',
    timeStyle: 'short',
    hour12: false
  }) + ' GMT';
} else {
  timestamp = new Date().toLocaleString('en-GB', {
    timeZone: 'GMT',
    dateStyle: 'medium',
    timeStyle: 'short',
    hour12: false
  }) + ' GMT';
}

// Format email body for pre-filling (include timestamp)
const firstName = name ? name.split(' ')[0] : 'there';
const emailBody = `Hi ${firstName},

Thank you for your enquiry!

---

Original Message:
${message}

Received: ${timestamp}
---

`;

const encodedBody = encodeURIComponent(emailBody);
const encodedSubject = encodeURIComponent(`Re: ${subject || 'Contact Form Submission'}`);

// Create mailto link with pre-filled data
const mailtoLink = email ? `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}` : '';

// Simple Discord message with clickable email using Discord's markdown
const discordMessage = `📧 **ACF Open Icons Contact Form**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**From:** ${name || 'Unknown'} (<${email || 'no-email@example.com'}>)
**Subject:** ${subject || 'No subject'}
**Submitted:** ${timestamp}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Original Message:**

"${message || 'No message provided'}"

*Received: ${timestamp}*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📧 [Click to reply](${mailtoLink})`;

return {
  json: {
    message: discordMessage,
    mailtoLink: mailtoLink
  }
};
