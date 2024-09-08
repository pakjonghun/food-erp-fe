'use client';

import { navExpand, navOpen } from '@/store/nav';
import { useReactiveVar } from '@apollo/client';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';

const HeaderLogo = () => {
  const isNavOpen = useReactiveVar(navOpen);
  const isNavExpand = useReactiveVar(navExpand);
  return isNavExpand ? (
    <></>
  ) : isNavOpen ? (
    <Image src={logo} alt="logo" width={70} height={20} style={{ marginRight: '20px' }} />
  ) : (
    <></>
  );
};

export default HeaderLogo;
