const navData = [
  {
    title: '대시보드',
    path: 'dashboard',
    icon: <></>,
    children: [
      {
        label: '매출',
        link: 'sale',
        icon: <></>,
      },
      {
        label: '재고',
        link: 'stock',
        icon: <></>,
      },
    ],
  },
  {
    title: '백데이터',
    path: 'back-data',
    icon: <></>,
    children: [
      {
        label: '제품',
        link: 'product',
        icon: <></>,
      },
      {
        label: '거래처',
        link: 'sale-client',
        icon: <></>,
      },
      {
        label: '발주처',
        link: 'order-client',
        icon: <></>,
      },
      {
        label: '창고',
        link: 'store',
        icon: <></>,
      },
    ],
  },
  {
    title: '재고',
    path: 'stock',
    icon: <></>,
    children: [
      {
        label: '제품기준',
        link: 'product',
        icon: <></>,
      },
      {
        label: '창고기준',
        link: 'store',
        icon: <></>,
      },
    ],
  },
];
