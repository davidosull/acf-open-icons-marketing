'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  CheckCircle2,
  Download,
  Settings,
  Code,
  RefreshCw,
  ArrowUpCircle,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { id: 'requirements', label: 'Requirements', icon: CheckCircle2 },
  { id: 'installation', label: 'Installation', icon: Download },
  { id: 'configuration', label: 'Configuration', icon: Settings },
  { id: 'usage', label: 'Usage', icon: Code },
  { id: 'migration', label: 'Icon Migration', icon: RefreshCw },
  { id: 'updates', label: 'Updates', icon: ArrowUpCircle },
];

export function DocsSidebar() {
  const [activeSection, setActiveSection] =
    React.useState<string>('requirements');
  const [isMobile, setIsMobile] = React.useState(false);
  const isScrollingRef = React.useRef(false);
  const scrollTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = React.useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Temporarily disable scroll spy during programmatic scroll
      isScrollingRef.current = true;
      setActiveSection(id); // Set immediately for better UX

      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Re-enable scroll spy after scroll completes
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      // Clear any pending scroll updates
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Don't update during programmatic scrolling
      if (isScrollingRef.current) {
        return;
      }

      const sections = navItems
        .map((item) => {
          const element = document.getElementById(item.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            return {
              id: item.id,
              top: rect.top + window.scrollY,
              bottom: rect.bottom + window.scrollY,
            };
          }
          return null;
        })
        .filter(Boolean) as Array<{
        id: string;
        top: number;
        bottom: number;
      }>;

      const scrollPosition = window.scrollY + 150; // Offset for header

      // Find the section that's currently in view
      let activeId = navItems[0].id; // Default to first section

      for (const section of sections) {
        // Check if scroll position is within this section's bounds
        if (scrollPosition >= section.top && scrollPosition < section.bottom) {
          activeId = section.id;
          break;
        }
        // If we've scrolled past all sections, use the last one
        if (scrollPosition >= section.top) {
          activeId = section.id;
        }
      }

      setActiveSection(activeId);
    };

    // Debounce scroll handler
    const debouncedHandleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(handleScroll, 50);
    };

    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Mobile: Dropdown select (sticky below header)
  if (isMobile) {
    return (
      <div className='lg:hidden sticky top-[73px] z-40 bg-white py-6 mb-8 -mx-6 lg:-mx-8 border-b border-zinc-200'>
        <div className='px-6 lg:px-8'>
          <Select value={activeSection} onValueChange={scrollToSection}>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Navigate to section' />
            </SelectTrigger>
            <SelectContent>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <SelectItem
                    key={item.id}
                    value={item.id}
                    className='pl-2 [&>span:first-child]:hidden'
                  >
                    <div className='flex items-center gap-2'>
                      <Icon
                        className={cn(
                          'h-4 w-4 shrink-0',
                          isActive ? 'text-blue-600' : 'text-zinc-500'
                        )}
                      />
                      <span>{item.label}</span>
                    </div>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      </div>
    );
  }

  // Desktop: Sidebar navigation
  return (
    <aside className='hidden lg:block w-64 shrink-0'>
      <div className='sticky top-24 space-y-1'>
        <nav className='space-y-1'>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors text-left',
                  isActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900'
                )}
              >
                <Icon
                  className={cn(
                    'h-4 w-4 shrink-0',
                    isActive ? 'text-blue-600' : 'text-zinc-400'
                  )}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
