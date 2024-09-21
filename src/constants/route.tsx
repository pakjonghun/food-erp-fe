export const PATH = {
  ['sign-in' as string]: {
    path: 'sign-in',
    label: '로그인',
  },
  'back-data': {
    path: 'back-data',
    label: '백데이터',
  },
  'back-data/product': {
    path: 'back-data/product',
    label: '제품',
  },
  dashboard: {
    path: 'dashboard',
    label: '대시보드',
  },
  'back-data/product/new': {
    path: 'back-data/product/new',
    label: '제품등록',
    canBack: true,
  },
};

export const publicPathList: string[] = ['sign-in'];
