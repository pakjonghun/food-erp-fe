export const PATH = {
  ['sign-in' as string]: {
    path: 'sign-in',
    label: '로그인',
  },
  dashboard: {
    path: 'dashboard',
    label: '대시보드',
  },
  'back-data': {
    path: 'back-data',
    label: '백데이터',
  },

  //제품
  'back-data/product': {
    path: 'back-data/product',
    label: '제품',
  },

  'back-data/product/new': {
    path: 'back-data/product/new',
    label: '제품 등록',
    canBack: true,
  },
  'back-data/product/category': {
    path: 'back-data/product/category',
    label: '카테고리',
  },
  'back-data/product/category/new': {
    path: 'back-data/product/new',
    label: '카테고리 등록',
    canBack: true,
  },

  //부자재
  'back-data/subsidiary': {
    path: 'back-data/subsidiary',
    label: '부자재',
  },

  'back-data/subsidiary/new': {
    path: 'back-data/subsidiary/new',
    label: '부자재등록',
    canBack: true,
  },
  'back-data/subsidiary/category': {
    path: 'back-data/subsidiary/category',
    label: '카테고리',
  },
  'back-data/subsidiary/category/new': {
    path: 'back-data/subsidiary/new',
    label: '카테고리 등록',
    canBack: true,
  },
};

export const publicPathList: string[] = ['sign-in'];
