'use client';

import { FC, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabType } from './type';
import TabPannel from './TabPannel';

interface Props {
  tabs: TabType[];
}

export const BasicTabs: FC<Props> = ({ tabs }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ ml: 3 }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {tabs.map((t) => {
            return <Tab key={t.label} disableRipple label={t.label} {...a11yProps(0)} />;
          })}
        </Tabs>
      </Box>

      {tabs.map((t) => {
        return (
          <TabPannel key={`${t.label}_pannel`} value={value} index={t.value}>
            {t.children}
          </TabPannel>
        );
      })}
    </Box>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
