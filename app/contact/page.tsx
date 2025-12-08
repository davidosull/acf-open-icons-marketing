'use client';

import * as React from 'react';
import { Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/components/sections/Section';
import { SectionHeader } from '@/components/sections/SectionHeading';

export default function ContactPage() {
  const [formState, setFormState] = React.useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject') || '',
      message: formData.get('message'),
    };

    // Client-side validation
    const newErrors: Record<string, string> = {};
    if (!data.name || (data.name as string).trim().length === 0) {
      newErrors.name = 'Name is required';
    }
    if (!data.email || (data.email as string).trim().length === 0) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email as string)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!data.message || (data.message as string).trim().length === 0) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setFormState('error');
      return;
    }

    // Submit to API route
    try {
      const formData = new FormData();
      formData.append('name', data.name as string);
      formData.append('email', data.email as string);
      if (data.subject) {
        formData.append('subject', data.subject as string);
      }
      formData.append('message', data.message as string);

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setFormState('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <>
      <Section background='blue-600/10'>
        <div className='mx-auto max-w-2xl text-center'>
          <SectionHeader
            className='!mb-0'
            subtitle='Contact'
            subtitleBadgeVariant='white'
            title='Get in Touch'
            description="Have a question or need support? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          />
        </div>
      </Section>

      <Section maxWidth='6xl'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Helpful Information Cards */}
          <div className='lg:col-span-1 space-y-6'>
            <Card className='bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200'>
              <CardHeader>
                <div className='flex items-center gap-3 mb-2'>
                  <div className='p-2 bg-white rounded-lg'>
                    <Clock className='h-5 w-5 text-blue-600' />
                  </div>
                  <CardTitle className='text-left'>Response Time</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-zinc-600 text-left'>
                  We aim to get back to you within 24 working hours (Mon-Thu
                  09:00-16:00 GMT). For urgent issues, please include
                  &quot;URGENT&quot; in your message.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className='lg:col-span-2'>
            <Card>
              <CardContent className='p-6 lg:p-8'>
                <form
                  name='contact'
                  method='POST'
                  action='/api/contact'
                  onSubmit={handleSubmit}
                >
                  {/* Honeypot field - hidden from users, bots will fill it */}
                  <input
                    type='text'
                    name='website'
                    tabIndex={-1}
                    autoComplete='off'
                    style={{
                      position: 'absolute',
                      left: '-9999px',
                      opacity: 0,
                      pointerEvents: 'none',
                    }}
                    aria-hidden='true'
                  />
                  <div className='space-y-6'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                      <div className='space-y-2'>
                        <label
                          htmlFor='name'
                          className='block text-sm font-medium text-zinc-900 text-left'
                        >
                          Name <span className='text-red-500'>*</span>
                        </label>
                        <Input
                          type='text'
                          name='name'
                          id='name'
                          required
                          maxLength={100}
                          placeholder='John Doe'
                          aria-invalid={errors.name ? 'true' : 'false'}
                          aria-describedby={
                            errors.name ? 'name-error' : undefined
                          }
                        />
                        {errors.name && (
                          <p
                            id='name-error'
                            className='text-sm text-red-600'
                            role='alert'
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className='space-y-2'>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium text-zinc-900 text-left'
                        >
                          Email <span className='text-red-500'>*</span>
                        </label>
                        <Input
                          type='email'
                          name='email'
                          id='email'
                          required
                          maxLength={255}
                          placeholder='your@email.com'
                          aria-invalid={errors.email ? 'true' : 'false'}
                          aria-describedby={
                            errors.email ? 'email-error' : undefined
                          }
                        />
                        {errors.email && (
                          <p
                            id='email-error'
                            className='text-sm text-red-600'
                            role='alert'
                          >
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className='space-y-2'>
                      <label
                        htmlFor='subject'
                        className='block text-sm font-medium text-zinc-900 text-left'
                      >
                        Subject{' '}
                        <span className='text-zinc-400 text-xs'>
                          (optional)
                        </span>
                      </label>
                      <Input
                        type='text'
                        name='subject'
                        id='subject'
                        placeholder='e.g., Feature request, Bug report, Question'
                        aria-invalid={errors.subject ? 'true' : 'false'}
                        aria-describedby={
                          errors.subject ? 'subject-error' : undefined
                        }
                      />
                      {errors.subject && (
                        <p
                          id='subject-error'
                          className='text-sm text-red-600'
                          role='alert'
                        >
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div className='space-y-2'>
                      <label
                        htmlFor='message'
                        className='block text-sm font-medium text-zinc-900 text-left'
                      >
                        Message <span className='text-red-500'>*</span>
                      </label>
                      <Textarea
                        name='message'
                        id='message'
                        rows={8}
                        required
                        maxLength={5000}
                        placeholder='Tell us how we can help...'
                        aria-invalid={errors.message ? 'true' : 'false'}
                        aria-describedby={
                          errors.message ? 'message-error' : undefined
                        }
                      />
                      {errors.message && (
                        <p
                          id='message-error'
                          className='text-sm text-red-600'
                          role='alert'
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {formState === 'success' && (
                      <div className='rounded-md bg-green-50 p-4 border border-green-200'>
                        <div className='flex items-start gap-3'>
                          <Mail className='h-5 w-5 text-green-600 shrink-0 mt-0.5' />
                          <div>
                            <p className='text-sm font-medium text-green-800'>
                              Thank you! Your message has been sent.
                            </p>
                            <p className='text-sm text-green-700 mt-1'>
                              We aim to get back to you within 24 working hours
                              (Mon-Thu 09:00-16:00 GMT).
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {formState === 'error' &&
                      Object.keys(errors).length === 0 && (
                        <div className='rounded-md bg-red-50 p-4 border border-red-200'>
                          <p className='text-sm font-medium text-red-800'>
                            Something went wrong. Please try again or email us
                            directly.
                          </p>
                        </div>
                      )}

                    <div>
                      <Button
                        type='submit'
                        disabled={formState === 'submitting'}
                        variant='accent'
                        className='w-full'
                      >
                        {formState === 'submitting'
                          ? 'Sending...'
                          : 'Send Message'}
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
