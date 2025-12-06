import { Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/components/sections/Section';
import { SectionHeader } from '@/components/sections/SectionHeading';

export default function ContactPage() {
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
                  We typically respond within 24 hours during business days. For
                  urgent issues, please include &quot;URGENT&quot; in your
                  message.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className='lg:col-span-2'>
            <Card>
              <CardContent className='p-6 lg:p-8'>
                <form name='contact' method='POST' netlify>
                  <div className='space-y-6'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                      <div className='space-y-2'>
                        <label
                          htmlFor='name'
                          className='block text-sm font-medium text-zinc-900 text-left'
                        >
                          Name <span className='text-red-500'>*</span>
                        </label>
                        <Input type='text' name='name' id='name' required />
                      </div>

                      <div className='space-y-2'>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium text-zinc-900 text-left'
                        >
                          Email <span className='text-red-500'>*</span>
                        </label>
                        <Input type='email' name='email' id='email' required />
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
                      />
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
                        placeholder='Tell us how we can help...'
                      />
                    </div>

                    <div>
                      <Button type='submit' variant='accent' className='w-full'>
                        Send Message
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
