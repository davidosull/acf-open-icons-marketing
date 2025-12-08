'use client';

import { ChangelogEntry } from '@/lib/changelog-types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ChangelogContentProps {
  entries: ChangelogEntry[];
}

const sectionLabels: { [key: string]: string } = {
  Added: 'Added',
  Changed: 'Changed',
  Fixed: 'Fixed',
  Removed: 'Removed',
  Security: 'Security',
  'Technical Improvements': 'Technical Improvements',
  Documentation: 'Documentation',
  'Code Quality': 'Code Quality',
  'Migration Notes': 'Migration Notes',
  Features: 'Features',
  'UX Improvements': 'UX Improvements',
  'Performance Improvements': 'Performance Improvements',
  Description: 'Description',
};

const sectionBadgeVariants: {
  [key: string]:
    | 'default'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'blue';
} = {
  Added: 'success',
  Changed: 'blue',
  Fixed: 'error',
  Removed: 'warning',
  Security: 'error',
  'Technical Improvements': 'secondary',
  Documentation: 'secondary',
  'Code Quality': 'secondary',
  'Migration Notes': 'blue',
  Features: 'success',
  'UX Improvements': 'blue',
  'Performance Improvements': 'success',
  Description: 'secondary',
};

export function ChangelogContent({ entries }: ChangelogContentProps) {
  if (!entries || entries.length === 0) {
    return (
      <div className='text-center text-zinc-500'>
        No changelog entries found.
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      {entries.map((entry) => (
        <Card key={entry.version} className='text-left'>
          <CardHeader>
            <div className='flex flex-col gap-1 mb-4'>
              <span className='text-sm text-zinc-500'>{entry.date}</span>
              <h2 className='text-xl font-medium text-zinc-900'>
                Version {entry.version}
              </h2>
            </div>
          </CardHeader>
          <CardContent className='space-y-8'>
            {Object.entries(entry.sections).map(([sectionName, items]) => (
              <div key={sectionName} className='text-left'>
                <div className='mb-4'>
                  <Badge
                    variant={sectionBadgeVariants[sectionName] || 'secondary'}
                    size='sm'
                  >
                    {sectionLabels[sectionName] || sectionName}
                  </Badge>
                </div>
                {items.length > 0 ? (
                  <ul className='list-disc list-outside space-y-2 pl-6 text-zinc-600'>
                    {items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        dangerouslySetInnerHTML={{
                          __html: formatChangelogItem(item),
                        }}
                      />
                    ))}
                  </ul>
                ) : (
                  <p className='text-left text-zinc-600'>{sectionName}</p>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

/**
 * Formats changelog items, converting markdown-style formatting to HTML
 */
function formatChangelogItem(item: string): string {
  // Convert **bold** to <strong>
  let formatted = item.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Convert `code` to <code>
  formatted = formatted.replace(
    /`([^`]+)`/g,
    '<code class="rounded bg-zinc-100 px-1 py-0.5 text-sm font-mono text-zinc-900">$1</code>'
  );

  // Handle nested bullets (lines starting with •)
  formatted = formatted.replace(
    /\n  • /g,
    '<br /><span class="ml-4 text-zinc-500">•</span> '
  );

  // Convert remaining line breaks to <br> for multi-line items
  formatted = formatted.replace(/\n/g, '<br />');

  return formatted;
}
