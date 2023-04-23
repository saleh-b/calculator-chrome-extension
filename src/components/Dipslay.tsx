import { TextField, Box } from '@mui/material';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from '../store';

function Dipslay() {
  const { equation } = useSelector((state: RootState) => state.equation);
  return (
    <Box sx={{ marginBottom: '20px' }}>
      <TextField value={equation} sx={{ input: { color: '#fff' } }} fullWidth disabled />
    </Box>
  );
}

export default Dipslay;
