import Iconify from '../icon/Iconify';
import { NavItem } from './type';

export const navList: NavItem[] = [
  {
    type: 'link',
    path: '/dashboard',
    label: '대시보드',
    icon: <Iconify icon="ri:dashboard-fill" width={20} />,
  },
  {
    type: 'p',
    path: 'back-data',
    label: '백데이터',
    icon: <Iconify icon="mdi:database" width={20} />,
    children: [
      {
        type: 'link',
        path: '/back-data/product',
        label: '제품',
        icon: <Iconify icon="dashicons:products" width={18} />,
      },
      {
        type: 'link',
        path: '/back-data/subsidiary',
        label: '부자재',
        icon: <Iconify icon="dashicons:products" width={18} />,
      },
    ],
  },
];
