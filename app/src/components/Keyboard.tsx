import { Button, Grid } from '@mui/material';
function Keyboard() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Button fullWidth variant='contained'>
            7
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant='contained'>
            8
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant='contained'>
            9
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant='contained'>
            C
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant='contained'>
            4
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant='contained'>
            5
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant='contained'>
            6
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant='contained'>
            +
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant='contained'>
            3
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant='contained'>
            2
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant='contained'>
            1
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant='contained'>
            -
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant='contained'>
            0
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant='contained'>
            X
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant='contained'>
            ÷
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button fullWidth variant='contained'>
            =
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Keyboard;
