'use client';

import { ListItemButton, ListItemIcon, ListItemText, MenuList } from '@mui/material';
import { navList } from './constants';
import Link from 'next/link';
import { useReactiveVar } from '@apollo/client';
import { navExpand } from '@/store/global';
import MiniNav from './MiniNav';

const BaseNav = () => {
  const isNavExpand = useReactiveVar(navExpand);

  return isNavExpand ? (
    <MenuList>
      {navList.map((v) => {
        return (
          <ListItemButton LinkComponent={Link} href={v.path} disableRipple key={`root_${v.path}`}>
            <ListItemIcon> {v.icon}</ListItemIcon>
            <ListItemText primary={v.label} />
          </ListItemButton>
        );
      })}
    </MenuList>
  ) : (
    <MiniNav />
  );
};

export default BaseNav;
