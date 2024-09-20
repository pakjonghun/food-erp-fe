import Iconify from '@/components/icon/Iconify';

export const PATH = {
  ['sign-in' as string]: {
    path: 'sign-in',
    label: '로그인',
    icon: <Iconify icon="ri:dashboard-fill" width={18} />,
  },
  'back-data': {
    path: 'back-data',
    label: '백데이터',
    icon: <Iconify icon="mdi:database" width={18} />,
  },
  product: {
    path: 'back-data/product',
    label: '제품',
    icon: <Iconify icon="dashicons:products" width={16} />,
  },
  dashboard: {
    path: 'dashboard',
    label: '대시보드',
    icon: <Iconify icon="ri:dashboard-fill" width={18} />,
  },
};

export const publicPathList: (keyof typeof PATH)[] = ['sign-in'];
