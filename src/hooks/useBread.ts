'use client';

import { PATH } from '@/constants/route';
import { bread, canBack, title } from '@/store/layout';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const useBread = () => {
  const path = usePathname();

  useEffect(() => {
    let subTitle = '';
    let prevPath = '';
    let back = false;
    const split = path.split('/').filter((i) => !!i);
    const breadList = [];

    for (let i = 0; i < split.length; i++) {
      const target = prevPath //
        ? prevPath + '/' + split[i]
        : split[i];

      prevPath = target;
      let bread = PATH[target];
      if (i === split.length - 1) {
        bread = {
          ...bread,
          path: '',
        };
        subTitle = bread.label;
      }

      if (bread.canBack) {
        back = true;
      }

      breadList.push(bread);
    }

    canBack(back);
    title(subTitle);
    bread(breadList);
  }, [path]);
};

export default useBread;
