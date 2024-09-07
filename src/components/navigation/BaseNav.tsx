import { ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { navList } from './constants';

const BaseNav = () => {
  return (
    <MenuList>
      {navList.map((v) => {
        return (
          <MenuItem key={`root_${v.path}`}>
            <ListItemIcon> {v.icon}</ListItemIcon>
            <ListItemText primary={v.label} />
          </MenuItem>
        );
      })}
    </MenuList>
  );
};

export default BaseNav;
