import { MenuItem } from '@/components/layout/type';
import { Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React, { FC } from 'react';

interface Props {
  selected: boolean;
  menuKey: string;
  menu: MenuItem;
}

const HeaderMenu: FC<Props> = ({ selected, menuKey, menu: { icon, label, role } }) => {
  return (
    <Button
      variant="contained"
      sx={{
        border: 'none',
        boxShadow: 'none',
        borderRadius: 1,
        bgcolor: (theme) => (selected ? theme.palette.action.active : ''),
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        component={Link}
        sx={{
          gap: 1,
          px: 2,
          width: '100%',
          textDecoration: 'none',
          color: (theme) => theme.palette.primary.light,
        }}
        href={`/${menuKey}`}
      >
        <Typography
          noWrap
          sx={{
            fontSize: '16px',
            fontWeight: selected ? 800 : 600,
          }}
        >
          {label}
        </Typography>
      </Stack>
    </Button>
  );
};

export default HeaderMenu;
