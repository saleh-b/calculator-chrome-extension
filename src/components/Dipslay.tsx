import { TextField, Box } from '@mui/material';
import { useSelector } from 'react-redux/es/exports';

function Dipslay() {
  const { equation } = useSelector((state) => state.equation);
  console.log(equation);
  return (
    <Box sx={{ marginBottom: '20px' }}>
      <TextField fullWidth type='number' disabled></TextField>
    </Box>
  );
}

export default Dipslay;
