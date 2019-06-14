import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Login = () => (
  <Grid container item direction='column' alignItems='center' spacing={3} style={{marginTop: '1rem'}}>

    <Grid item>
      <Typography variant='h2' align='center'>Log In</Typography> 
    </Grid>

    <Grid item>
      <form action='http://localhost:5000/api/users/login' method='post'>
        <Grid container item direction='column' spacing={3}>
          <Grid item>
            <TextField 
              label='Email'
              name='email'
              type='email'
            />
          </Grid>
          <Grid item>
            <TextField 
              label='Password'
              name='password'
              type='password'
            />
          </Grid>
          <Grid item>
            <Button variant='contained' type='submit' style={{width: '100%'}}>Submit</Button>
          </Grid>
        </Grid>
      </form>
    </Grid>

  </Grid>
);

export default Login;