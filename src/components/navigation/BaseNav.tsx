import { ListItemButton, ListItemIcon, ListItemText, MenuList } from '@mui/material';
import { navList } from './constants';
import Link from 'next/link';

const BaseNav = () => {
  return (
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
  );
};

export default BaseNav;
