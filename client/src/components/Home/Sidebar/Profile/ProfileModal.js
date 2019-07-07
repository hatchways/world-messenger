import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";

import styles from '../../../../styles/ModalStyles';
import StyledButton from '../../../../styles/StyledButton';

class ProfileModal extends Component {
  state = { 
    firstName: this.props.profile.firstName,
    lastName: this.props.profile.lastName
  }

  fileInput = React.createRef();

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = () => {
    this.props.editProfile(
      this.state.firstName, 
      this.state.lastName, 
      this.fileInput.current.files[0]
    )
      .then(() => {
        this.props.closeModal();
      })
      .catch(err => {
        console.log(err);
      });
  }

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
              Edit Profile
            </Typography>
          </Grid>

          <Grid item className={this.props.classes.item}>
            <TextField
              label='First name'
              name='firstName'
              type='text'
              onChange={this.onChange}
              value={this.state.firstName}
              fullWidth
            />
          </Grid>

          <Grid item className={this.props.classes.item}>
            <TextField
              label='Last name'
              name='lastName'
              type='text'
              onChange={this.onChange}
              value={this.state.lastName}
              fullWidth
            />
          </Grid>

          <Grid item className={this.props.classes.item}>
              <label htmlFor='avatar'>
                <Typography variant='body1'>Profile picture</Typography>
              </label>
              <input 
                id='avatar'
                name='avatar'
                type='file'
                accept='image/png, image/jpeg'
                ref={this.fileInput}
              />
          </Grid>

          <Grid item className={this.props.classes.flexItem}>
            <StyledButton color='blue'onClick={this.submit}>
              Save
            </StyledButton>
          </Grid>

        </Grid>
      </form>
    );
  }
}

export default withStyles(styles)(ProfileModal);