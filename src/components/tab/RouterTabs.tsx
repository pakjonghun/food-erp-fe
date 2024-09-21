'use client';

import { FC, ReactNode } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabType } from './type';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  tabs: TabType[];
}

const RouterTabs: FC<Props> = ({ tabs }) => {
  const path = usePathname();

  const parsedPath = path.replace(/\/$/, '');
  const value = tabs.findIndex((t) => t.value == parsedPath);

  return (
    <Box>
      <Tabs value={value == -1 ? 0 : value} aria-label="basic tabs example">
        {tabs.map((t) => {
          return (
            <Tab
              href={t.value}
              component={Link}
              key={t.label}
              disableRipple
              label={t.label}
              {...a11yProps(0)}
            />
          );
        })}
      </Tabs>
    </Box>
  );
};

export default RouterTabs;

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
