import { ListItemButton, ListItemIcon, MenuList, Tooltip } from '@mui/material';
import { navList } from './constants';
import Link from 'next/link';

const MiniNav = () => {
  return (
    <MenuList>
      {navList.map((v) => {
        return (
          <ListItemButton
            sx={{ height: '44px' }}
            LinkComponent={Link}
            href={v.path}
            disableRipple
            key={`root_${v.path}`}
          >
            <Tooltip title={v.label}>
              <ListItemIcon> {v.icon}</ListItemIcon>
            </Tooltip>
          </ListItemButton>
        );
      })}
    </MenuList>
  );
};

export default MiniNav;
