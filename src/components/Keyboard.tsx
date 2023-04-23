import { Button, Grid } from '@mui/material';
import { useDispatch } from 'react-redux/es/exports';
import { calculate, write } from '../store/equation';

const keyboardArr = [
  {
    char: 7,
  },
  {
    char: 8,
  },
  {
    char: 9,
  },
  {
    char: 'C',
  },
  {
    char: 4,
  },
  {
    char: 5,
  },
  {
    char: 6,
  },
  {
    char: '+',
  },
  {
    char: 3,
  },
  {
    char: 2,
  },
  {
    char: 1,
  },
  {
    char: '-',
  },
  {
    char: 0,
  },
  {
    char: '*',
  },
  {
    char: '÷',
  },
];

function Keyboard() {
  const dispatchFn = useDispatch();
  return (
    <>
      <Grid container spacing={2}>
        {keyboardArr.map((e) => (
          <Grid key={e.char} item xs={3}>
            <Button onClick={() => dispatchFn(write(e.char))} fullWidth size='large' variant='contained'>
              {e.char}
            </Button>
          </Grid>
        ))}
        <Grid item xs={3}>
          <Button onClick={() => dispatchFn(calculate('calculate'))} fullWidth size='large' variant='contained'>
            =
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Keyboard;
