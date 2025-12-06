import { LucideIcon } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface IconCardProps {
  title: string;
  description: React.ReactNode;
  icon: LucideIcon;
  className?: string;
}

export function IconCard({
  title,
  description,
  icon: Icon,
  className,
}: IconCardProps) {
  return (
    <Card className={className}>
      <CardHeader className='space-y-0'>
        <div className='flex items-start justify-between'>
          <Icon className='h-6 w-6 text-blue-600' aria-hidden='true' />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
