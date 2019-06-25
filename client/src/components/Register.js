import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/styles';

import styles from '../styles/FormStyles';
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
    errors: {}
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
        this.setState({
          errors: err.response.data
        });
      })
  }

  closeError = () => {
    this.setState({
      errors: {}
    });
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
        className={this.props.classes.root}  
      >
        <Grid item container justify='flex-end' spacing={3} alignItems='center' className={this.props.classes.header}>
          <Grid item>
            <Typography variant='body1'>Already have an account?</Typography>
          </Grid>
          <Grid item>
            <StyledButton component={ButtonLink} to='/login'>
              Login
            </StyledButton>
          </Grid>
        </Grid>

        <Grid item className={this.props.classes.body}>
          <form>
            <Grid container direction='column' spacing={4} justify='center'>
              <Grid item>
                <Typography variant='h4' className={this.props.classes.title}>Create an account.</Typography> 
              </Grid>
              <Grid item>
                <TextField 
                  label='Username'
                  name='username'
                  type='text'
                  onChange={this.onChange}
                  value={this.state.username}
                  error={this.state.errors.hasOwnProperty('username')}
                  helperText={this.state.errors.username || ''}
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
                  error={this.state.errors.hasOwnProperty('email')}
                  helperText={this.state.errors.email || ''}
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
                  error={this.state.errors.hasOwnProperty('password')}
                  helperText={this.state.errors.password || ''}
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
                  error={this.state.errors.hasOwnProperty('password2')}
                  helperText={this.state.errors.password2 || ''}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <FormControl fullWidth error={this.state.errors.hasOwnProperty('language')}>
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
                  <FormHelperText>{this.state.errors.language || ''}</FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
          </form>
        </Grid>

        <Grid item className={this.props.classes.submit}>
          <StyledButton color='blue' onClick={this.onSubmit}>
            Create
          </StyledButton>
        </Grid>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          open={this.state.errors.hasOwnProperty('msg')}
          message={this.state.errors.msg || ''}
          onClose={this.closeError}
          action={
            <IconButton
              key='close'
              color='inherit'
              onClick={this.closeError}
            >
              <Icon className='fas fa-times'/>
            </IconButton>
          }
        > 
        </Snackbar>
    
      </Grid>
    );
  }
}

export default withStyles(styles)(Register);