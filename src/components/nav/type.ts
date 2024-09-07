import { ReactNode } from 'react';

export type NavItem = {
  type: 'link' | 'p';
  path: string;
  label: string;
  icon: ReactNode;
  children?: NavItem[];
};
