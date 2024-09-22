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
    path: 'back-data/product/category/new',
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
    label: '부자재 등록',
    canBack: true,
  },
  'back-data/subsidiary/category': {
    path: 'back-data/subsidiary/category',
    label: '카테고리',
  },
  'back-data/subsidiary/category/new': {
    path: 'back-data/subsidiary/category/new',
    label: '카테고리 등록',
    canBack: true,
  },

  //거래처
  'back-data/client': {
    path: 'back-data/client',
    label: '거래처',
  },

  'back-data/client/new': {
    path: 'back-data/client/new',
    label: '거래처 등록',
    canBack: true,
  },
  'back-data/client/type': {
    path: 'back-data/client/type',
    label: '거래처 타입',
  },
  'back-data/client/type/new': {
    path: 'back-data/client/type/new',
    label: '카테고리 등록',
    canBack: true,
  },

  //창고
  'back-data/warehouse': {
    path: 'back-data/warehouse',
    label: '창고',
  },
  'back-data/warehouse/new': {
    path: 'back-data/warehouse/new',
    label: '창고 등록',
    canBack: true,
  },

  //공장
  'back-data/factory': {
    path: 'back-data/factory',
    label: '공장',
  },
  'back-data/factory/new': {
    path: 'back-data/factory/new',
    label: '공장 등록',
    canBack: true,
  },
};

export const publicPathList: string[] = ['sign-in'];
