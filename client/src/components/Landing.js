import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Register from './Register';
import Login from './Login';

import bg from '../assets/messenger-bg-img.png';
import icon from '../assets/chat-bubble.png';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '100%',
    margin: -16
  },
  sidebar: {
    backgroundImage: 'linear-gradient(#3A8DFF, #9BC1FB)',
    color: 'white',
    height: '100%',
    width: '100%',
    opacity: 0.92,
    margin: 0
  },
  sidebarBackground: {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    height: '101%',
    width: '100%',
    margin: 0
  },
  sidebarText: {
    width: '70%'
  },
  icon: {
    marginTop: '35%'
  }
})

const Landing = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Grid container spacing={0} className={classes.root}>

        <Grid item sm={5} className={classes.sidebarBackground}>
          <Grid 
            container 
            direction='column' 
            alignItems='center'  
            className={classes.sidebar} 
            spacing={4}
          >
            <Grid item className={classes.icon}>
              <img src={icon} alt='icon'/>
            </Grid>
            <Grid item className={classes.sidebarText}>
              <Typography variant='h4' align='center'>
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