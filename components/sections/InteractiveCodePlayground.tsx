'use client';

import * as React from 'react';
import { CheckCircle, RotateCcw, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { ColorPicker } from '@/components/ui/color-picker';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ControlGroup } from '@/components/ui/control-group';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { CodeBlock } from '@/components/ui/code-block';
import { useCopyToClipboard } from '@/components/hooks/use-copy-to-clipboard';
import { cn } from '@/lib/utils';
import { Section } from './Section';
import { SectionHeader } from './SectionHeading';
import { GradientText } from '@/components/ui/gradient-text';

export function InteractiveCodePlayground() {
  const [size, setSize] = React.useState([48]);
  const [color, setColor] = React.useState('#2563eb');
  const [echo, setEcho] = React.useState(true);
  const [className, setClassName] = React.useState('');

  const hasColorOverride = color !== '#2563eb';
  const iconSize = size[0];
  const iconColor = hasColorOverride ? color : 'currentColor';

  const generateCode = () => {
    const params: string[] = [];

    if (size[0] !== 24) {
      params.push(`'size' => ${size[0]} // default 24`);
    }

    if (hasColorOverride) {
      params.push(`'color' => '${color}'`);
    }

    if (!echo) {
      params.push(`'echo' => false`);
    }

    if (className) {
      params.push(`'class' => '${className}'`);
    }

    const paramsString =
      params.length > 0 ? `[\n    ${params.join(',\n    ')}\n]` : '';

    if (params.length === 0) {
      return `<?php
$icon_field = get_field('icon_field');

// Basic usage (default size: 24px)
acf_open_icon($icon_field);`;
    }

    return `<?php
$icon_field = get_field('icon_field');

// With options
acf_open_icon($icon_field, ${paramsString});`;
  };

  const code = generateCode();
  const { copied, copyToClipboard } = useCopyToClipboard();

  const resetOptions = () => {
    setSize([48]);
    setColor('#2563eb');
    setEcho(true);
    setClassName('');
  };

  return (
    <Section background='white'>
      <SectionHeader
        subtitle='How it works'
        subtitleBadgeVariant='white'
        title={
          <>
            <GradientText>Simple, powerful API</GradientText> that works
            seamlessly
          </>
        }
        description='Explore interactive code examples below. Toggle different options to see how the code updates in real-time, helping you understand how to implement ACF Open Icons in your projects.'
      />

      <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* Controls Section - Left */}
        <Card className='flex flex-col bg-gradient-to-b from-white to-zinc-50'>
          <CardHeader>
            <CardTitle className='mb-2 text-sm'>Controls</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-3'>
            {/* Size Control */}
            <ControlGroup>
              <label
                htmlFor='size'
                className='text-sm font-medium text-zinc-700 whitespace-nowrap'
              >
                Size
              </label>
              <div className='flex items-center gap-2 w-full'>
                <Slider
                  id='size'
                  min={16}
                  max={128}
                  step={4}
                  value={size}
                  onValueChange={setSize}
                  className='flex-1'
                />
                <span className='text-sm font-mono text-zinc-900 min-w-[3rem] text-right'>
                  {size[0]}px
                </span>
              </div>
            </ControlGroup>

            {/* Color Control */}
            <ControlGroup>
              <label
                htmlFor='color'
                className='text-sm font-medium text-zinc-700 whitespace-nowrap'
              >
                Color
              </label>
              <div className='flex items-center gap-2 w-full'>
                <ColorPicker
                  id='color'
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className='h-8 w-12 shrink-0'
                />
                <Input
                  type='text'
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  placeholder='#2563eb'
                  className='flex-1 h-8 text-xs font-mono'
                />
              </div>
            </ControlGroup>

            {/* Return Format / Echo Toggle */}
            <ControlGroup>
              <label className='text-sm font-medium text-zinc-700 whitespace-nowrap'>
                Display method
              </label>
              <SegmentedControl
                options={[
                  { value: 'echo', label: 'Echo' },
                  { value: 'return', label: 'Return' },
                ]}
                value={echo ? 'echo' : 'return'}
                onChange={(value) => setEcho(value === 'echo')}
              />
            </ControlGroup>

            {/* Class Input */}
            <ControlGroup>
              <label
                htmlFor='class'
                className='text-sm font-medium text-zinc-700 whitespace-nowrap'
              >
                Class
              </label>
              <Input
                id='class'
                type='text'
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                placeholder='icon-class'
                className='w-full h-8 text-xs font-mono'
              />
            </ControlGroup>

            {/* Reset Button */}
            <Button
              variant='destructive'
              size='default'
              onClick={resetOptions}
              className='w-full'
            >
              <RotateCcw className='h-4 w-4' />
              Reset
            </Button>
          </CardContent>
        </Card>

        {/* Preview Section - Center */}
        <Card className='relative overflow-hidden bg-gradient-to-b from-white to-zinc-50 flex flex-col min-h-[250px]'>
          <CardHeader>
            <CardTitle className='mb-2 text-sm'>Live Preview</CardTitle>
          </CardHeader>
          <CardContent className='relative p-0 flex-1 flex items-center justify-center'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-5 pointer-events-none'>
              <div
                className='absolute inset-0'
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)',
                  backgroundSize: '24px 24px',
                }}
              />
            </div>

            {/* Preview Content - Centered Icon */}
            <div
              className={cn(
                'relative z-10 flex items-center justify-center transition-all duration-300',
                className
              )}
              style={{
                color: iconColor,
                // transform: 'translateY(-30px)',
              }}
            >
              <CheckCircle
                size={iconSize}
                strokeWidth={2}
                className={hasColorOverride ? '' : 'text-blue-600'}
                style={hasColorOverride ? { color: iconColor } : undefined}
              />
            </div>
          </CardContent>
        </Card>

        {/* Code Section */}
        <Card className='flex flex-col h-full bg-gradient-to-b from-white to-zinc-50 md:col-span-2 lg:col-span-1'>
          <CardHeader>
            <div className='flex items-center justify-between w-full'>
              <CardTitle className='text-sm'>Code Example</CardTitle>
              <Button
                variant='white'
                size='sm'
                onClick={() => copyToClipboard(code)}
                className={cn(
                  'gap-2 transition-all duration-200',
                  copied &&
                    'bg-green-50 border-green-200 text-green-700 hover:bg-green-100 hover:border-green-300'
                )}
              >
                {copied ? (
                  'Copied!'
                ) : (
                  <>
                    <Copy className='h-3 w-3' />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </CardHeader>
          <CardContent className='flex-1 flex flex-col min-h-0'>
            <CodeBlock code={code} language='php' />
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
