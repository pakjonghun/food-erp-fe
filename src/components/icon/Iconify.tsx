'use client';

import { FC } from 'react';
import { Icon, IconifyIconProps, disableCache } from '@iconify/react';
import Box, { BoxProps } from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';

type Props = IconifyIconProps & BoxProps;

const Iconify: FC<Props> = ({ icon, width = 24, sx, ...rest }) => {
  const initSx = {
    width,
    height: width,
    flexShrink: 0,
    display: 'inline-flex',
  };

  return (
    <NoSsr fallback={<Box component="span" sx={{ ...initSx, ...sx }} />}>
      <Box ssr icon={icon} component={Icon} sx={{ ...initSx, ...sx }} />
    </NoSsr>
  );
};

disableCache('local');
export default Iconify;
