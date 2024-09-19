import { styled } from '@mui/material/styles';
import { Paper, TextField, Button } from '@mui/material';

// Styled components
export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const StyledForm = styled('form')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(1),
}));

export const FileInputDiv = styled('div')(() => ({
  width: '97%',
  margin: '10px 0',
}));

export const SubmitButton = styled(Button)(() => ({
  marginBottom: 10,
}));
