'use client';

import { FC } from 'react';
import { Icon, disableCache } from '@iconify/react';
import Box, { BoxProps } from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';
import type { IconProps } from '@iconify/react';

type Props = BoxProps & IconProps;

const Iconify: FC<Props> = ({ icon, width = 24, sx, ...rest }) => {
  const initSx = {
    width,
    height: width,
    flexShrink: 0,
    display: 'inline-flex',
  };

  return (
    <NoSsr fallback={<Box component="span" sx={{ ...initSx, ...sx }} />}>
      <Box ssr icon={icon} component={Icon} sx={{ ...initSx, ...sx }} {...rest} />
    </NoSsr>
  );
};

disableCache('local');
export default Iconify;
