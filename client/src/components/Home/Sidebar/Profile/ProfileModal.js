import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const style = {
  backgroundColor: 'white',
  width: 500,
  height: 'auto',
  marginTop: '6rem',
  position: 'absolute',
  padding: '3rem',
  borderRadius: 10
}

class ProfileModal extends Component {
  state = { 
    firstName: '',
    lastName: ''
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form style={style}>
        <Grid
          container
          direction='column'
          alignItems='center'
          spacing={3}
        >
          <Grid item style={{width: '100%'}}>
            <Typography variant='h4'>
              Edit Profile
            </Typography>
          </Grid>

          <Grid item style={{width: '100%'}}>
            <TextField
              label='First name'
              name='firstName'
              type='text'
              onChange={this.onChange}
              value={this.state.firstName}
              fullWidth
            />
          </Grid>

          <Grid item style={{width: '100%'}}>
            <TextField
              label='Last name'
              name='lastName'
              type='text'
              onChange={this.onChange}
              value={this.state.lastName}
              fullWidth
            />
          </Grid>

          <Grid item style={{width: '100%'}}>
              <label htmlFor='avatar'>
                <Typography variant='body1'>Profile picture</Typography>
              </label>
              <input 
                id='avatar'
                name='avatar'
                type='file'
                accept="image/png, image/jpeg"
              />
          </Grid>

        </Grid>
      </form>
    );
  }
}

export default ProfileModal;