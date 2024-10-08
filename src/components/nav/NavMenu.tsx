'use client';

import { FC, useState } from 'react';
import { NavItem } from './type';
import {
  alpha,
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SxProps,
  Theme,
} from '@mui/material';
import Link from 'next/link';
import Iconify from '../icon/Iconify';
import { usePathname } from 'next/navigation';
import { useTheme } from '@emotion/react';

interface Props {
  item: NavItem;
  sx?: SxProps;
}

const NavMenu: FC<Props> = ({ item, sx }) => {
  const path = usePathname();
  const [open, setOpen] = useState(true);

  const handleClickMenu = () => {
    setOpen((prev) => !prev);
  };

  const hasChildren = !!item.children;
  const selected = path.includes(item.path);
  const theme = useTheme() as Theme;

  return (
    <>
      <ListItemButton
        sx={{ ...sx }}
        selected={selected}
        onClick={handleClickMenu}
        href={item.path}
        disableRipple
        LinkComponent={item.type == 'link' ? Link : 'div'}
        key={item.path}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText>{item.label}</ListItemText>
        {hasChildren && (
          <Iconify icon={open ? 'mingcute:up-line' : 'mingcute:down-line'} width={18} />
        )}
      </ListItemButton>
      {hasChildren && (
        <Collapse in={open} unmountOnExit>
          {item?.children?.map((c) => {
            return (
              <NavMenu
                sx={{
                  pl: 6,
                  '&.Mui-selected': {
                    bgcolor: alpha(theme.palette.action.selected, 0.03),
                  },
                }}
                item={c}
                key={c.path}
              />
            );
          })}
        </Collapse>
      )}
    </>
  );
};

export default NavMenu;
