import { MenuList } from '@mui/material';
import { navList } from './constants';
import NavMenu from './NavMenu';

const WideNav = () => {
  return (
    <MenuList>
      {navList.map((item) => {
        return <NavMenu item={item} key={item.path} />;
      })}
    </MenuList>
  );
};

export default WideNav;
