import { ReactNode } from 'react';

export type NavItem = {
  path: string;
  label: string;
  icon: ReactNode;
  children?: NavItem[];
};
