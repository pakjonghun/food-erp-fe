'use client';

import { FC } from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavLink from 'next/link';
import Link from '@mui/material/Link';
import { BreadType } from './type';

interface Props {
  breadList: BreadType[];
}

const BasicBreadCrumbs: FC<Props> = ({ breadList }) => {
  console.log(
    ' pathlist: ',
    breadList.map((b) => b.path)
  );
  return (
    <Breadcrumbs sx={{ my: 3 }} aria-label="breadcrumb">
      {breadList.map((l) => {
        const hasHref = !!l.path;
        const key = `${l.label}_${l.path}`;
        return hasHref ? (
          <Link
            key={key}
            component={NavLink}
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit"
            href={`/${l.path}`}
          >
            {l.label}
          </Link>
        ) : (
          <Typography
            key={key}
            sx={{ color: 'text.primary', display: 'flex', alignItems: 'center' }}
          >
            {l.label}
          </Typography>
        );
      })}
    </Breadcrumbs>
  );
};

export default BasicBreadCrumbs;
