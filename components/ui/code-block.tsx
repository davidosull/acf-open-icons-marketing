'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

// Dynamically import syntax highlighter to reduce initial bundle size
const SyntaxHighlighter = dynamic(
  () => import('react-syntax-highlighter').then((mod) => mod.Prism),
  {
    ssr: false,
  }
);

export function CodeBlock({
  code,
  language = 'php',
  className,
}: CodeBlockProps) {
  const [style, setStyle] = React.useState<Record<
    string,
    React.CSSProperties
  > | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    Promise.all([
      import('react-syntax-highlighter/dist/cjs/styles/prism').then(
        (mod) => mod.materialLight
      ),
    ]).then(([loadedStyle]) => {
      setStyle(loadedStyle);
      setIsLoading(false);
    });
  }, []);

  if (isLoading || !style) {
    return (
      <div className={cn('flex-1 min-h-0 overflow-auto bg-white', className)}>
        <pre className='text-sm font-mono whitespace-pre-wrap'>
          <code>{code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className={cn('flex-1 min-h-0 overflow-auto', className)}>
      <SyntaxHighlighter
        language={language}
        style={style}
        customStyle={{
          margin: 0,
          fontSize: '0.875rem',
          padding: '0',
          background: 'transparent',
          height: '100%',
        }}
        codeTagProps={{
          style: {
            fontFamily:
              'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
