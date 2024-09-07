import { ListItemButton, ListItemIcon, MenuList, Tooltip } from '@mui/material';
import { navList } from './constants';
import Link from 'next/link';
import MiniNavMenu from './MiniNavMenu';

const MiniNav = () => {
  return (
    <MenuList>
      {navList.map((item) => {
        return <MiniNavMenu item={item} key={item.path} />;
      })}
    </MenuList>
  );
};

export default MiniNav;
