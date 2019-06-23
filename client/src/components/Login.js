import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import FormStyles from '../styles/FormStyles';
import StyledButton from '../styles/StyledButton';

const ButtonLink = React.forwardRef(
  (props, ref) => <Link innerRef={ref} {...props} />
);

class Login extends Component {
  state = { 
    email: '',
    password: '',
    msg: null
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    axios.post('/api/users/login', {email, password})
      .then(res => {
        //TODO: redirect user to homepage
        const token = res.data.token;
        sessionStorage.setItem('token', token);
      })
      .catch(err => {
        //TODO: display error msg
        console.log(err);
      })
  }

  render() {
    return (
      <Grid 
        item container sm
        direction='column' 
        alignItems='center'
        spacing={3}  
        style={FormStyles.root}
      >
        <Grid item container justify='flex-end' spacing={3} alignItems='center' style={FormStyles.header}>
          <Grid item>
            <Typography variant='body1'>Don't have an account?</Typography>
          </Grid>
          <Grid item>
            <StyledButton component={ButtonLink} to='/register'>
              Create Account
            </StyledButton>
          </Grid>
        </Grid>

        <Grid item style={FormStyles.body}>
          <form>
            <Grid container direction='column' spacing={4} justify='center'>
              <Grid item>
                <Typography variant='h4'>Welcome back!</Typography> 
              </Grid>
              <Grid item>
                <TextField 
                  label='Email'
                  name='email'
                  type='email'
                  onChange={this.onChange}
                  value={this.state.email}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField 
                  label='Password'
                  name='password'
                  type='password'
                  onChange={this.onChange}
                  value={this.state.password}
                  fullWidth
                />
              </Grid>
            </Grid>
          </form>
        </Grid>

        <Grid item style={FormStyles.submit}>
          <StyledButton color='blue' onClick={this.onSubmit}>
            Login
          </StyledButton>
        </Grid>
    
      </Grid>
    );
  }
}

export default Login;