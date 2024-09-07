'use client';

import { navExpand } from '@/store/nav';
import { useReactiveVar } from '@apollo/client';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';

const HeaderLogo = () => {
  const isNavExpand = useReactiveVar(navExpand);
  return isNavExpand ? (
    <></>
  ) : (
    <Image src={logo} alt="logo" width={70} style={{ marginRight: '20px' }} />
  );
};

export default HeaderLogo;
