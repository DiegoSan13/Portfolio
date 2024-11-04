import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionTitleProps {
  icon: React.ReactNode;
  title: string;
  color: string;
}

export function SectionTitle({ icon, title, color }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-4">
      <div className={`w-8 h-8 ${color}`}>{icon}</div>
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  );
}