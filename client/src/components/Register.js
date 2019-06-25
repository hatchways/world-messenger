import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import FormStyles from '../styles/FormStyles';
import StyledButton from '../styles/StyledButton';
import langs from '../utils/languages';

const ButtonLink = React.forwardRef(
  (props, ref) => <Link innerRef={ref} {...props} />
);

class Register extends Component {
  state = { 
    username: '',
    email: '',
    password: '',
    password2: '',
    language: '',
    msg: null
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();

    const { 
      username, 
      email, 
      password,
      password2,
      language
     } = this.state;

    axios.post('/api/users/register', {username, email, password, password2, language})
      .then(res => {
        //TODO: redirect user to homepage
        console.log(res);
      })
      .catch(err => {
        //TODO: display error msg
        console.log(err);
      })
  }

  render() {
    const menuItems = [];
    for (let lang in langs) {
      menuItems.push(<MenuItem value={lang} key={lang}>{langs[lang]}</MenuItem>)
    }
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
            <Typography variant='body1'>Already have an account?</Typography>
          </Grid>
          <Grid item>
            <StyledButton component={ButtonLink} to='/login'>
              Login
            </StyledButton>
          </Grid>
        </Grid>

        <Grid item style={FormStyles.body}>
          <form>
            <Grid container direction='column' spacing={4} justify='center'>
              <Grid item>
                <Typography variant='h4'>Create an account.</Typography> 
              </Grid>
              <Grid item>
                <TextField 
                  label='Username'
                  name='username'
                  type='text'
                  onChange={this.onChange}
                  value={this.state.username}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField 
                  label='E-mail address'
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
              <Grid item>
                <TextField 
                  label='Confirm password'
                  name='password2'
                  type='password'
                  onChange={this.onChange}
                  value={this.state.password2}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <FormControl fullWidth>
                  <InputLabel htmlFor='language'>Select primary language</InputLabel>
                  <Select 
                    value={this.state.language}
                    onChange={this.onChange}
                    inputProps={{
                      name: 'language',
                      id: 'language'
                    }}
                  >
                    {menuItems}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </form>
        </Grid>

        <Grid item style={FormStyles.submit}>
          <StyledButton color='blue' onClick={this.onSubmit}>
            Create
          </StyledButton>
        </Grid>
    
      </Grid>
    );
  }
}

export default Register;