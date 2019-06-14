import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Register = () => (
  <Grid container item direction='column' alignItems='center' spacing={3} style={{marginTop: '1rem'}}>

    <Grid item>
      <Typography variant='h2' align='center'>New User</Typography>
    </Grid>

    <Grid item>
      <form action='http://localhost:5000/api/users/register' method='post'>
        <Grid container item direction='column' spacing={3}>
          <Grid item>
            <TextField 
              label='Username'
              name='username'
              type='text'
            />
          </Grid>
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
            <TextField 
              label='Confirm Password'
              name='password2'
              type='password'
            />
          </Grid>
          <Grid item>
            <TextField 
              label='Language'
              name='language'
              type='text'
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

export default Register;