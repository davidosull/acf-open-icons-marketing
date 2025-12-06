import { MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function FeatureRequest() {
  return (
    <div className='w-full max-w-3xl mx-auto mt-16'>
      <Card className='relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-blue-200'>
        <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl' />
        <div className='absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-200/20 to-purple-200/20 rounded-full blur-2xl' />
        <CardContent className='relative p-8'>
          <div className='flex flex-col items-center text-center'>
            <div className='mb-4 p-3 bg-white rounded-full shadow-sm'>
              <MessageSquare className='h-8 w-8 text-blue-600' />
            </div>
            <h3 className='text-2xl font-medium text-zinc-900 mb-3'>
              Have a feature request?
            </h3>
            <p className='text-zinc-600 mb-6 max-w-lg text-base'>
              We&apos;d love to hear your ideas! Your feedback helps us
              prioritise what to build next and make ACF Open Icons even better
              for your workflow.
            </p>
            <Button asChild variant='accent' size='sm'>
              <a href='/contact'>Get in Touch</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
