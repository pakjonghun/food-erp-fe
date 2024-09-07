import { Box, MenuItem, MenuList, Stack } from '@mui/material';
import { navList } from './constants';

const BaseNav = () => {
  return (
    <Box component="nav">
      <MenuList>
        {navList.map((v) => {
          return (
            <MenuItem key={`root_${v.path}`}>
              {v.icon}
              {v.label}
            </MenuItem>
          );
        })}
      </MenuList>
      {}
      {/* <Box component="ul" sx={{display:"flex",flexDirection:"column"}}>
            
    </Box> */}
    </Box>
  );
};

export default BaseNav;
