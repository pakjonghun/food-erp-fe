'use client';

import { PATH } from '@/constants/route';
import { bread, title } from '@/store/layout';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const useBread = () => {
  const path = usePathname();

  useEffect(() => {
    let subTitle = '';
    const split = path.split('/').filter((i) => !!i);
    const breadList = [];
    for (let i = 0; i < split.length; i++) {
      const target = split[i];
      const bread = PATH[target];
      if (i === split.length - 1) {
        bread.path = '';
        subTitle = bread.label;
      }
      breadList.push(bread);
    }

    title(subTitle);
    bread(breadList);
  }, []);
};

export default useBread;
