'use client';

import * as React from 'react';
import {
  CheckCircle2,
  Download,
  Settings,
  Code,
  Palette,
  RefreshCw,
} from 'lucide-react';
import { Section } from '@/components/sections/Section';
import { SectionHeader } from '@/components/sections/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeBlock } from '@/components/ui/code-block';
import { DocsSidebar } from '@/components/docs/DocsSidebar';

const requirements = [
  { text: 'WordPress 5.0 or higher' },
  { text: 'PHP 7.4 or higher (PHP 8.0+ recommended)' },
  { text: 'Advanced Custom Fields Pro or ACF Free (version 5.0+)' },
  { text: 'Valid license key required for full functionality' },
];

const installationSteps = [
  {
    step: 1,
    title: 'Download the plugin',
    description:
      'Download the plugin ZIP file from your purchase or account area.',
  },
  {
    step: 2,
    title: 'Upload to WordPress',
    description:
      'Navigate to Plugins > Add New in your WordPress admin, then click Upload Plugin and select the ZIP file.',
  },
  {
    step: 3,
    title: 'Install and activate',
    description: 'Click Install Now and then Activate the plugin.',
  },
  {
    step: 4,
    title: 'Configure',
    description:
      'Go to Custom Fields > ACF Open Icons to configure the plugin and activate your license.',
  },
];

const codeExamples = {
  basic: `<?php
$icon_field = get_field('icon_field');

// Basic usage (default size: 24px)
acf_open_icon($icon_field);`,
  withSize: `<?php
$icon_field = get_field('icon_field');

// With custom size
acf_open_icon($icon_field, [
    'size' => 32, // default: 24
]);`,
  return: `<?php
$icon_field = get_field('icon_field');

// Return instead of echo
$svg_markup = acf_open_icon($icon_field, [
    'size' => 64,
    'echo' => false,
]);
echo $svg_markup;`,
  withColor: `<?php
$icon_field = get_field('icon_field');

// With color override (bypasses token-based color)
acf_open_icon($icon_field, [
    'size' => 48,
    'color' => '#a7f3d0',  // Force a specific color
]);`,
  withClass: `<?php
$icon_field = get_field('icon_field');

// With CSS classes
acf_open_icon($icon_field, [
    'class' => 'icon-class-name',
    'size' => 32,
]);`,
};

export default function DocsPage() {
  return (
    <>
      <Section background='blue-600/10'>
        <div className='mx-auto max-w-2xl text-center'>
          <SectionHeader
            className='!mb-0'
            subtitle='Documentation'
            subtitleBadgeVariant='white'
            title='Complete Guide to ACF Open Icons'
            description='Everything you need to know to get started with ACF Open Icons, from installation to advanced usage.'
          />
        </div>
      </Section>

      <Section maxWidth='7xl' className='py-0 lg:py-16'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
          {/* Sidebar Navigation */}
          <DocsSidebar />

          {/* Main Content */}
          <div className='flex-1 min-w-0'>
            <div className='space-y-12'>
              {/* Requirements */}
              <div id='requirements' className='scroll-mt-24'>
                <h2 className='text-xl font-medium text-zinc-900 mb-6'>
                  Requirements
                </h2>
                <Card>
                  <CardContent className='pt-6'>
                    <ul className='space-y-3'>
                      {requirements.map((req, index) => (
                        <li key={index} className='flex items-start gap-3'>
                          <CheckCircle2 className='h-5 w-5 text-green-600 shrink-0 mt-0.5' />
                          <span className='text-zinc-700'>{req.text}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Installation */}
              <div id='installation' className='scroll-mt-24'>
                <div className='flex items-center gap-3 mb-6'>
                  <Download className='h-6 w-6 text-blue-600' />
                  <h2 className='text-xl font-medium text-zinc-900'>
                    Installation
                  </h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {installationSteps.map((step) => (
                    <Card key={step.step}>
                      <CardHeader>
                        <div className='flex items-center gap-3'>
                          <div className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-medium text-sm'>
                            {step.step}
                          </div>
                          <CardTitle>
                            {step.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className='text-zinc-600'>{step.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Configuration */}
              <div id='configuration' className='scroll-mt-24'>
                <div className='flex items-center gap-3 mb-6'>
                  <Settings className='h-6 w-6 text-blue-600' />
                  <h2 className='text-xl font-medium text-zinc-900'>
                    Configuration
                  </h2>
                </div>
                <div className='space-y-6'>
                  <Card>
                    <CardHeader>
                      <CardTitle>License Activation</CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                      <ol className='list-decimal list-outside space-y-2 text-zinc-700 pl-6'>
                        <li>
                          Navigate to Custom Fields &gt; ACF Open Icons in
                          WordPress admin
                        </li>
                        <li>Enter your license key in the License section</li>
                        <li>Click Activate License</li>
                        <li>
                          Once activated, all plugin features will be available
                        </li>
                      </ol>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Icon Set Selection</CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                      <ol className='list-decimal list-outside space-y-2 text-zinc-700 pl-6'>
                        <li>Go to Custom Fields &gt; ACF Open Icons</li>
                        <li>
                          In the Icon Set section, select your preferred icon
                          library:
                          <ul className='list-disc list-outside ml-6 mt-2 space-y-1'>
                            <li>
                              <strong>Lucide</strong> - Modern, consistent icon
                              set
                            </li>
                            <li>
                              <strong>Tabler Icons</strong> - Comprehensive icon
                              collection
                            </li>
                            <li>
                              <strong>Heroicons</strong> - Beautiful
                              hand-crafted SVG icons
                            </li>
                          </ul>
                        </li>
                        <li>Optionally pin a specific version for stability</li>
                        <li>Click Save Changes</li>
                      </ol>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className='flex items-center gap-3'>
                        <Palette className='h-5 w-5 text-blue-600' />
                        <CardTitle>Color Palette</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                      <p className='text-zinc-700'>
                        Configure color tokens that can be applied to icons:
                      </p>
                      <ol className='list-decimal list-outside space-y-2 text-zinc-700 pl-6'>
                        <li>
                          In the Palette section, set colors for tokens A, B,
                          and C
                        </li>
                        <li>
                          These tokens can be applied when selecting icons
                        </li>
                        <li>
                          Changing palette colors automatically updates all
                          icons using those tokens
                        </li>
                      </ol>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Usage */}
              <div id='usage' className='scroll-mt-24'>
                <div className='flex items-center gap-3 mb-6'>
                  <Code className='h-6 w-6 text-blue-600' />
                  <h2 className='text-xl font-medium text-zinc-900'>Usage</h2>
                </div>
                <div className='space-y-8'>
                  <Card>
                    <CardHeader>
                      <CardTitle>Creating an ACF Field</CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                      <ol className='list-decimal list-outside space-y-2 text-zinc-700 pl-6'>
                        <li>Go to Custom Fields &gt; Field Groups</li>
                        <li>
                          Create a new field group or edit an existing one
                        </li>
                        <li>
                          Add a new field and select Open Icons as the field
                          type
                        </li>
                        <li>
                          Configure field settings (label, name, required, etc.)
                        </li>
                        <li>Save the field group</li>
                      </ol>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Displaying Icons in Templates</CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-6'>
                      <p className='text-zinc-700'>
                        Use the{' '}
                        <code className='rounded bg-zinc-100 px-1.5 py-0.5 text-sm font-mono text-zinc-900'>
                          acf_open_icon()
                        </code>{' '}
                        helper function to display icons:
                      </p>

                      <div>
                        <h3 className='text-base font-medium text-zinc-900 mb-3'>
                          Basic Usage
                        </h3>
                        <CodeBlock code={codeExamples.basic} language='php' />
                      </div>

                      <div>
                        <h3 className='text-base font-medium text-zinc-900 mb-3'>
                          With Custom Size
                        </h3>
                        <CodeBlock
                          code={codeExamples.withSize}
                          language='php'
                        />
                      </div>

                      <div>
                        <h3 className='text-base font-medium text-zinc-900 mb-3'>
                          Return Instead of Echo
                        </h3>
                        <CodeBlock code={codeExamples.return} language='php' />
                      </div>

                      <div>
                        <h3 className='text-base font-medium text-zinc-900 mb-3'>
                          With Color Override
                        </h3>
                        <CodeBlock
                          code={codeExamples.withColor}
                          language='php'
                        />
                        <p className='text-sm text-zinc-600 mt-2'>
                          This bypasses token-based color and forces a specific
                          color.
                        </p>
                      </div>

                      <div>
                        <h3 className='text-base font-medium text-zinc-900 mb-3'>
                          With CSS Classes
                        </h3>
                        <CodeBlock
                          code={codeExamples.withClass}
                          language='php'
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Function Parameters</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='space-y-4'>
                        <div>
                          <h4 className='font-medium text-zinc-900 mb-2'>
                            <code className='rounded bg-zinc-100 px-1.5 py-0.5 text-sm font-mono text-zinc-900'>
                              $value
                            </code>{' '}
                            (array|string)
                          </h4>
                          <p className='text-zinc-700'>
                            The icon field value from ACF
                          </p>
                        </div>
                        <div>
                          <h4 className='font-medium text-zinc-900 mb-2'>
                            <code className='rounded bg-zinc-100 px-1.5 py-0.5 text-sm font-mono text-zinc-900'>
                              $atts
                            </code>{' '}
                            (array) - Optional attributes:
                          </h4>
                          <ul className='list-disc list-outside space-y-1 text-zinc-700 ml-6'>
                            <li>
                              <code className='rounded bg-zinc-100 px-1 py-0.5 text-xs font-mono text-zinc-900'>
                                size
                              </code>{' '}
                              (int): Icon size in pixels (default: 24)
                            </li>
                            <li>
                              <code className='rounded bg-zinc-100 px-1 py-0.5 text-xs font-mono text-zinc-900'>
                                color
                              </code>{' '}
                              (string): Hex color override (bypasses token-based
                              color)
                            </li>
                            <li>
                              <code className='rounded bg-zinc-100 px-1 py-0.5 text-xs font-mono text-zinc-900'>
                                class
                              </code>{' '}
                              (string): CSS class name(s) to add to the SVG
                            </li>
                            <li>
                              <code className='rounded bg-zinc-100 px-1 py-0.5 text-xs font-mono text-zinc-900'>
                                echo
                              </code>{' '}
                              (bool): Whether to echo or return the markup
                              (default: true)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Icon Migration */}
              <div id='migration' className='scroll-mt-24'>
                <div className='flex items-center gap-3 mb-6'>
                  <RefreshCw className='h-6 w-6 text-blue-600' />
                  <h2 className='text-xl font-medium text-zinc-900'>
                    Icon Migration
                  </h2>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Migrating Between Icon Providers</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <p className='text-zinc-700'>
                      When switching between icon providers, the plugin includes
                      a migration tool to help update existing icons:
                    </p>
                    <ol className='list-decimal list-outside space-y-2 text-zinc-700 pl-6'>
                      <li>Go to Custom Fields &gt; ACF Open Icons</li>
                      <li>Navigate to the Migration section</li>
                      <li>Review icons that need migration</li>
                      <li>
                        Use the migration tool to automatically match and update
                        icons to the new provider
                      </li>
                    </ol>
                  </CardContent>
                </Card>
              </div>

              {/* Updates */}
              <div id='updates' className='scroll-mt-24'>
                <h2 className='text-xl font-medium text-zinc-900 mb-6'>
                  Updates
                </h2>
                <Card>
                  <CardContent className='pt-6 space-y-4'>
                    <p className='text-zinc-700'>
                      The plugin includes automatic update functionality:
                    </p>
                    <ul className='list-disc list-outside space-y-2 text-zinc-700 pl-6'>
                      <li>Updates are checked daily via WordPress cron</li>
                      <li>Update notifications appear in the Plugins page</li>
                      <li>
                        Updates require a valid license (active or within grace
                        period)
                      </li>
                      <li>
                        Updates are delivered securely via proxy endpoint with
                        license validation
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
