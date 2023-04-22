import { TextField, Box } from '@mui/material';

function Dipslay() {
  return (
    <Box sx={{ marginBottom: '20px' }}>
      <TextField fullWidth type='number' disabled></TextField>
    </Box>
  );
}

export default Dipslay;
