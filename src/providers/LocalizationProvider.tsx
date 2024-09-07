'use client';

import { LocalizationProvider as Provider } from '@mui/x-date-pickers/LocalizationProvider';
import { FC, ReactNode } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/de';

interface Props {
  children: ReactNode;
}

const LocalizationProvider: FC<Props> = ({ children }) => {
  Provider;
  return (
    <Provider dateAdapter={AdapterDayjs} adapterLocale="ko">
      {children}
    </Provider>
  );
};

export default LocalizationProvider;
