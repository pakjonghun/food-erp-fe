'use client';

import { MenuList } from '@mui/material';
import { navList } from './constants';
import { useReactiveVar } from '@apollo/client';
import { navExpand } from '@/store/nav';
import MiniNav from './MiniNav';
import NavMenu from './NavMenu';

const BaseNav = () => {
  const isNavExpand = useReactiveVar(navExpand);

  return isNavExpand ? (
    <MenuList>
      {navList.map((item) => {
        return <NavMenu item={item} key={item.path} />;
      })}
    </MenuList>
  ) : (
    <MiniNav />
  );
};

export default BaseNav;
