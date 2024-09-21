import { Stack, styled } from '@mui/material';

const FormStack = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

export default FormStack;
