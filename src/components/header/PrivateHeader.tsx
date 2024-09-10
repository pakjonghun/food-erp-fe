'use client';

import BaseHeader from '@/components/header/base/BaseHeader';
import Iconify from '../icon/Iconify';
import { IconButton, ListItemIcon, ListItemText, MenuItem, MenuList, Popover } from '@mui/material';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSnack } from '@/context/snackContext/SnackProvider';
import { logout } from '@/actions/auth';

const PrivateHeader = () => {
  const router = useRouter();
  const setSnack = useSnack();
  const [openMenu, setOpenMenu] = useState(false);

  const menuRef = useRef<null | HTMLButtonElement>(null);
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleClickMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleLogout = async () => {
    const failAction = () => setSnack({ variant: 'error', message: '로그인이 실패했습니다.' });
    const res = await fetch('/local/logout', { credentials: 'include' });
    if (!res.ok) {
      failAction;
      return;
    }
    const result = await res.json();
    const redirectURL = result.redirect;
    if (redirectURL) {
      setSnack({ message: '안녕히 가세요.' });
      router.replace(redirectURL);
    }
  };

  const menuList = [
    {
      lable: '로그아웃',
      icon: <Iconify sx={{ mr: 1 }} icon="material-symbols:logout" width={18} />,
      callback: handleLogout,
    },
  ];

  return (
    <BaseHeader>
      <IconButton sx={{ ml: 'auto' }} onClick={handleClickMenu} ref={menuRef}>
        <Iconify icon="ant-design:setting-filled" />
      </IconButton>
      <Popover
        anchorEl={menuRef.current}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={openMenu}
        onClose={handleCloseMenu}
      >
        <MenuList disablePadding sx={{ py: 0.6 }}>
          {menuList.map((menu) => {
            return (
              <MenuItem onClick={menu.callback} key={menu.lable}>
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText>{menu.lable}</ListItemText>
              </MenuItem>
            );
          })}
        </MenuList>
      </Popover>
    </BaseHeader>
  );
};

export default PrivateHeader;
