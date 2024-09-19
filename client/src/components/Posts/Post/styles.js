import { styled } from '@mui/material/styles';
import { Card, CardActions, CardMedia } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  height: '100%',
  position: 'relative',
}));

export const StyledCardMedia = styled(CardMedia)(() => ({
  height: 0,
  paddingTop: '56.25%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundBlendMode: 'darken',
}));

export const Overlay = styled('div')(() => ({
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: 'white',
}));

export const Overlay2 = styled('div')(() => ({
  position: 'absolute',
  top: '20px',
  right: '20px',
  color: 'white',
}));

export const CardActionsContainer = styled(CardActions)(() => ({
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
}));
