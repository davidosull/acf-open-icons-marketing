import type { Metadata } from 'next';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { Section } from '@/components/sections/Section';
import { SectionHeader } from '@/components/sections/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FeatureRequest } from '@/components/sections/FeatureRequest';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Roadmap',
  description: 'Upcoming features and improvements planned for ACF Open Icons',
  alternates: {
    canonical: `${SITE_URL}/roadmap`,
  },
};

interface RoadmapItem {
  id: string;
  status: 'completed' | 'in-progress' | 'planned';
  title: string;
  description: string;
  date: string;
}

const roadmapItems: RoadmapItem[] = [
  {
    id: '1',
    status: 'completed',
    title: 'Production Release',
    description:
      'Stable 1.0.0 release with comprehensive documentation and testing.',
    date: 'Q4 2025',
  },
  {
    id: '2',
    status: 'completed',
    title: 'Core Icon Libraries',
    description: 'Support for Heroicons, Lucide, and Tabler Icons.',
    date: 'Q4 2025',
  },
  {
    id: '3',
    status: 'in-progress',
    title: 'New Icon Libraries',
    description: 'Support for more icon libraries.',
    date: 'Q1 2026',
  },
  {
    id: '4',
    status: 'planned',
    title: 'Better Icon Searching',
    description:
      'Better searching for icons with hints, suggestions and autocomplete. Search by name, keywords, tags, categories, etc.',
    date: 'Q1 2026',
  },
];

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    label: 'Completed',
    color: 'text-green-600',
  },
  'in-progress': {
    icon: Clock,
    label: 'In Progress',
    color: 'text-blue-600',
  },
  planned: {
    icon: Circle,
    label: 'Planned',
    color: 'text-zinc-400',
  },
};

function RoadmapItemCard({ item }: { item: RoadmapItem }) {
  const status = statusConfig[item.status];
  const StatusIcon = status.icon;

  return (
    <Card className='w-full'>
      <CardHeader>
        <div className='flex items-center justify-between gap-4 w-full'>
          <div className='flex items-center gap-3'>
            <StatusIcon className={`h-5 w-5 ${status.color} shrink-0`} />
            <CardTitle className='text-lg'>{item.title}</CardTitle>
          </div>
          <span className='text-sm font-medium text-zinc-500 shrink-0'>
            {item.date}
          </span>
        </div>
      </CardHeader>
      <CardContent className='text-left'>
        <p className='text-zinc-600 leading-relaxed'>{item.description}</p>
      </CardContent>
    </Card>
  );
}

export default function RoadmapPage() {
  const completedItems = roadmapItems.filter(
    (item) => item.status === 'completed'
  );
  const inProgressItems = roadmapItems.filter(
    (item) => item.status === 'in-progress'
  );
  const plannedItems = roadmapItems.filter((item) => item.status === 'planned');

  return (
    <>
      <Section background='blue-600/10'>
        <div className='mx-auto max-w-2xl text-center'>
          <SectionHeader
            className='!mb-0'
            subtitle='Roadmap'
            subtitleBadgeVariant='blue'
            title="What's Coming Next"
            description="Our planned features and improvements. We're constantly working to make ACF Open Icons better based on your feedback."
          />
        </div>
      </Section>

      <Section maxWidth='6xl'>
        {/* Roadmap Items by Status */}
        <div className='w-full max-w-3xl mx-auto space-y-12'>
          {inProgressItems.length > 0 && (
            <div>
              <div className='flex items-center gap-3 mb-6'>
                <Clock className='h-6 w-6 text-blue-600' />
                <h2 className='text-2xl font-medium text-zinc-900'>
                  In Progress
                </h2>
                <Badge variant='blue' size='sm'>
                  {inProgressItems.length}
                </Badge>
              </div>
              <div className='space-y-4'>
                {inProgressItems.map((item) => (
                  <RoadmapItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}

          {plannedItems.length > 0 && (
            <div>
              <div className='flex items-center gap-3 mb-6'>
                <Circle className='h-6 w-6 text-zinc-400' />
                <h2 className='text-2xl font-medium text-zinc-900'>Planned</h2>
                <Badge variant='secondary' size='sm'>
                  {plannedItems.length}
                </Badge>
              </div>
              <div className='space-y-4'>
                {plannedItems.map((item) => (
                  <RoadmapItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}

          {completedItems.length > 0 && (
            <div>
              <div className='flex items-center gap-3 mb-6'>
                <CheckCircle2 className='h-6 w-6 text-green-600' />
                <h2 className='text-2xl font-medium text-zinc-900'>
                  Recently Completed
                </h2>
                <Badge variant='success' size='sm'>
                  {completedItems.length}
                </Badge>
              </div>
              <div className='space-y-4'>
                {completedItems.map((item) => (
                  <RoadmapItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <FeatureRequest />
      </Section>
    </>
  );
}
