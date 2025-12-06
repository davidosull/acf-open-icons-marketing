import { LucideIcon } from 'lucide-react';

export interface IconItem {
  title: string;
  description: React.ReactNode;
  icon: LucideIcon;
}

export interface FeatureItem {
  name: string;
  title: string;
  description: string;
  icon: LucideIcon;
  imagePath: string;
  imageAlt: string;
}
