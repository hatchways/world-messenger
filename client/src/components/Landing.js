import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Register from './Register';
import Login from './Login';

import bg from '../assets/bg.jpg';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '100%',
    margin: -16
  },
  splash: {
    backgroundImage: 'linear-gradient(#498FEE, #88BAFE)',
    color: 'white',
    height: '100%',
    width: '100%',
    opacity: 0.92,
    margin: 0
  },
  background: {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    height: '101%',
    width: '100%',
    margin: 0
  },
  icon: {
    marginTop: '28%'
  }
})

const Landing = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Grid container spacing={0} className={classes.root}>

        <Grid item sm={5} className={classes.background}>
          <Grid 
            container 
            direction='column' 
            alignItems='center'  
            className={classes.splash} 
            spacing={4}
          >
            <Grid item className={classes.icon}>
              <i className='far fa-comment-dots fa-6x'></i>
            </Grid>
            <Grid item>
              <Typography variant='h3' align='center'>
                Converse with anyone with any language
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Switch>
          <Route path='/register' component={Register}/>
          <Route path={['/', '/login']} component={Login}/>
        </Switch>

      </Grid>
    </BrowserRouter>
  )
};

export default Landing;