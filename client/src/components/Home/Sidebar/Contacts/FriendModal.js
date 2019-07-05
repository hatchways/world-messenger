import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

const style = {
  backgroundColor: 'white',
  height: 'auto',
  width: 500,
  marginTop: '6rem',
  position: 'absolute',
  padding: '3rem',
  borderRadius: 10
}

class FriendModal extends Component {
  state = { 
    email: ''
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
              Add Friend
            </Typography>
          </Grid>

          <Grid item style={{display: 'flex', alignItems: 'center', width: '100%'}}>
            <InputBase 
              name='email'
              type='email'
              value={this.state.email}
              onChange={this.onChange}
              placeholder="Enter friend's email address"
              style={{flex: 1, border: '1px solid #e6e6e6', padding: '1rem', borderRadius: 5}}
            />
            <IconButton style={{color:'#3A8DFF', marginLeft: 5}}>
              <Icon className='fas fa-plus'/>
            </IconButton>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default FriendModal;