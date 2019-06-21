import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Register from './Register';
import Login from './Login';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '100%'
  },
  splash: {
    backgroundImage: 'linear-gradient(#498FEE, #88BAFE)',
    color: 'white'
  }
})

const Landing = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Grid container spacing={0} className={classes.root}>

        <Grid 
          item container 
          sm={5} 
          direction='column' 
          alignItems='center' 
          justify='center' 
          className={classes.splash} 
          spacing={4}
        >
          <Grid item>
            <i className='far fa-comment-dots fa-6x'></i>
          </Grid>
          <Grid item>
            <Typography variant='h3' align='center'>
              Converse with anyone with any language
            </Typography>
          </Grid>
        </Grid>

        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
        </Switch>


      </Grid>
    </BrowserRouter>
  )
};

export default Landing;