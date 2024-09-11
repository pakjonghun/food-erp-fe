export const PATH = {
  'sign-in': {
    path: 'sign-in',
    label: '로그인',
  },
  'back-data': {
    path: 'back-data',
    label: '백데이터',
  },
  'back-data/product': {
    path: 'back-data/product',
    label: '백데이터 / 제품',
  },
  dashboard: {
    path: 'dashboard',
    label: '대시보드',
  },
};

export const publicPathList: (keyof typeof PATH)[] = ['sign-in'];
