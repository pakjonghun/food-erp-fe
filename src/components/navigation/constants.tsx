import Iconify from '../icon/Iconify';
import { NavItem } from './type';

export const navList: NavItem[] = [
  {
    path: '/dashboard',
    label: '대시보드',
    icon: <Iconify icon="ri:dashboard-fill" width={20} />,
  },
  {
    path: '/back-data',
    label: '백데이터',
    icon: <Iconify icon="mdi:database" width={20} />,
    children: [
      {
        path: '/back-data/product',
        label: '제품',
        icon: <Iconify icon="dashicons:products" width={20} />,
      },
      {
        path: '/back-data/product',
        label: '제품',
        icon: <Iconify icon="dashicons:products" width={20} />,
      },
      {
        path: '/back-data/product',
        label: '제품',
        icon: <Iconify icon="dashicons:products" width={20} />,
      },
    ],
  },
];
