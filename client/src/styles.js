import { styled } from '@mui/material/styles';
import { AppBar, Typography } from '@mui/material';

// Styled component for AppBar
export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}));

// Styled component for Typography (heading)
export const StyledHeading = styled(Typography)(({ theme }) => ({
  color: 'rgba(0,183,255, 1)',
}));

// Styled component for Image
export const StyledImage = styled('img')({
  marginLeft: '15px',
});
