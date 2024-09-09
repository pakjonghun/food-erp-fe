import { List, ListItemButton, Paper, Popover, Stack, Tooltip } from '@mui/material';
import Link from 'next/link';
import { NavItem } from './type';
import { FC, useRef, useState } from 'react';
import Iconify from '../icon/Iconify';

interface Props {
  item: NavItem;
}

const MiniNavMenu: FC<Props> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children;
  const popRef = useRef<null | HTMLAnchorElement>(null);

  const handleMouseEnter = () => {
    if (!hasChildren) return;
    setOpen(true);
  };

  const handleMouseLeave = () => {
    if (!hasChildren) return;
    setOpen(false);
  };

  const isLink = item.type == 'link';

  return (
    <>
      <ListItemButton
        ref={popRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{ height: '44px' }}
        href={isLink ? item.path : ''}
        disableRipple
      >
        <Tooltip title={item.label}>
          <Stack sx={{ color: 'grey' }} direction="row" alignItems="center">
            {item.icon}
            {hasChildren && <Iconify icon="mingcute:right-line" width={14} />}
          </Stack>
        </Tooltip>
      </ListItemButton>
      {open && (
        <Popover
          onClose={handleMouseLeave}
          sx={{ pointerEvents: 'none' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          slotProps={{
            paper: {
              sx: {
                pointerEvents: 'auto',
                boxShadow: 1,
              },
            },
          }}
          open={open}
          anchorEl={popRef.current}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Paper>
            <List sx={{ py: 0 }}>
              {item.children?.map((c) => {
                return (
                  <ListItemButton
                    component={Link}
                    sx={{ textDecoration: 'none', fontSize: '14px', fontWeight: 400 }}
                    href={c.path}
                    key={c.path}
                  >
                    {c.label}
                  </ListItemButton>
                );
              })}
            </List>
          </Paper>
        </Popover>
      )}
    </>
  );
};

export default MiniNavMenu;
