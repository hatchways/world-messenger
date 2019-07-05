import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { withStyles } from "@material-ui/styles";

import styles from '../../../../styles/ModalStyles';

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
      <form className={this.props.classes.root}>
        <Grid
          container
          direction='column'
          alignItems='center'
          spacing={3}
        >
          <Grid item className={this.props.classes.item}>
            <Typography variant='h4'>
              Add Friend
            </Typography>
          </Grid>

          <Grid item className={this.props.classes.flexItem}>
            <InputBase 
              name='email'
              type='email'
              value={this.state.email}
              onChange={this.onChange}
              placeholder="Enter friend's email address"
              className={this.props.classes.customInput}
            />
            <IconButton className={this.props.classes.customInputButton}>
              <Icon className='fas fa-plus'/>
            </IconButton>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default withStyles(styles)(FriendModal);