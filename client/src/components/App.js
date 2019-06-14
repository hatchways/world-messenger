import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Register from './Register';
import Login from './Login';

const ButtonLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

const App = () => {
  return (
    <BrowserRouter>
      <Grid container direction='column' spacing={2} alignItems='center' style={{marginTop: '2rem'}}>

        <Grid item>
          <Typography variant='h1'>Welcome</Typography>
        </Grid>

        <Grid item>
          <Button variant='contained' color='primary' component={ButtonLink} to='/login'>
            Log In
          </Button>
        </Grid>

        <Grid item>
          <Button variant='contained' color='secondary' component={ButtonLink} to='/register'>
            New User
          </Button>
        </Grid>

        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>

      </Grid>
    </BrowserRouter>
  )
};

export default App;