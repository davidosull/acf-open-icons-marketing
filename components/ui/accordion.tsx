'use client';

import * as React from 'react';
import { CirclePlus, CircleMinus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionContextValue {
  openItems: Set<string>;
  toggleItem: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(
  null
);

interface AccordionProps {
  children: React.ReactNode;
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  collapsible?: boolean;
  className?: string;
}

export function Accordion({
  children,
  type = 'single',
  defaultValue,
  collapsible = true,
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(() => {
    if (defaultValue) {
      return new Set(
        Array.isArray(defaultValue) ? defaultValue : [defaultValue]
      );
    }
    return new Set();
  });

  const toggleItem = React.useCallback(
    (value: string) => {
      setOpenItems((prev) => {
        const next = new Set(prev);
        if (next.has(value)) {
          // If collapsible, allow closing
          if (collapsible) {
            next.delete(value);
          }
        } else {
          if (type === 'single') {
            next.clear();
          }
          next.add(value);
        }
        return next;
      });
    },
    [type, collapsible]
  );

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={cn('space-y-2', className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const AccordionItemContext = React.createContext<{ value: string } | null>(
  null
);

export function AccordionItem({
  value,
  children,
  className,
}: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div className={cn('border-b', className)}>{children}</div>
    </AccordionItemContext.Provider>
  );
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function AccordionTrigger({
  children,
  className,
}: AccordionTriggerProps) {
  const context = React.useContext(AccordionContext);
  if (!context)
    throw new Error('AccordionTrigger must be used within Accordion');

  const itemContext = React.useContext(AccordionItemContext);
  if (!itemContext)
    throw new Error('AccordionTrigger must be used within AccordionItem');

  const isOpen = context.openItems.has(itemContext.value);

  return (
    <button
      type='button'
      onClick={() => context.toggleItem(itemContext.value)}
      className={cn(
        'flex w-full items-center justify-between py-4 text-left font-medium transition-all',
        className
      )}
      data-state={isOpen ? 'open' : 'closed'}
    >
      {children}
      {isOpen ? (
        <CircleMinus className='h-5 w-5 shrink-0 text-zinc-500' />
      ) : (
        <CirclePlus className='h-5 w-5 shrink-0 text-zinc-500' />
      )}
    </button>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

export function AccordionContent({
  children,
  className,
}: AccordionContentProps) {
  const context = React.useContext(AccordionContext);
  if (!context)
    throw new Error('AccordionContent must be used within Accordion');

  const itemContext = React.useContext(AccordionItemContext);
  if (!itemContext)
    throw new Error('AccordionContent must be used within AccordionItem');

  const isOpen = context.openItems.has(itemContext.value);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState<string>('0px');

  React.useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        setHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setHeight('0px');
      }
    }
  }, [isOpen, children]);

  return (
    <div
      ref={contentRef}
      className={cn(
        'overflow-hidden transition-all duration-200 ease-out',
        className
      )}
      style={{
        height: height,
      }}
      data-state={isOpen ? 'open' : 'closed'}
    >
      <div className='pb-4 pt-0'>{children}</div>
    </div>
  );
}
