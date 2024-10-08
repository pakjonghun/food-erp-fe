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
        icon: <Iconify icon="dashicons:products" width={16} />,
      },
      {
        type: 'link',
        path: '/back-data/subsidiary',
        label: '부자재',
        icon: <Iconify icon="dashicons:products" width={16} />,
      },
      {
        type: 'link',
        path: '/back-data/client',
        label: '거래처',
        icon: <Iconify icon="fa6-solid:handshake-simple" width={18} />,
      },
      //창고
      {
        type: 'link',
        path: '/back-data/warehouse',
        label: '창고',
        icon: <Iconify icon="material-symbols:warehouse" width={18} />,
      },

      //공장
      {
        type: 'link',
        path: '/back-data/factory',
        label: '공장',
        icon: <Iconify icon="material-symbols:factory" width={19} />,
      },
    ],
  },
];
