import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import axios from 'axios';

import Sidebar from './Sidebar/Sidebar';
import Chat from './Chat/Chat';

import styles from '../../styles/Home/HomeStyles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: sessionStorage.getItem("token"),
      username: sessionStorage.getItem("username"),
      profile: {
        firstName: '',
        lastName: '',
        image: '',
        language: ''
      },
      contacts: []
    };
  }

  componentDidMount() {
    this.getProfile();
    this.getContacts();
  }

  getProfile = () => {
    return axios
      .get('api/profiles/profile', {
        headers: {
          Authorization: this.state.token
        }
      })
      .then(res => {
        this.setState({
          profile: {
            ...this.state.profile,
            ...res.data.user.profile.profile
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getContacts = () => {
    return axios
      .get('api/contacts/list', {
        headers: {
          Authorization: this.state.token
        }
      })
      .then(res => {
        let contacts = res.data.map(curr => ({
          username: curr.recipient.username,
          status: curr.status
        }));
        
        this.setState({
          contacts: contacts
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  requestContact = email => {
    return axios
      .post('api/contacts/request', {email}, {
        headers: {
          Authorization: this.state.token
        }
      })
      .then(() => {
        this.getContacts();
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.token) return <Redirect to="/login" />;

    return (
      <Grid 
        container 
        spacing={0} 
        className={this.props.classes.root}
      >
        <CssBaseline />
        <Sidebar 
          username={this.state.username}
          profile={this.state.profile}
          contacts={this.state.contacts}
          requestContact={this.requestContact}
        />
        <Chat />
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);