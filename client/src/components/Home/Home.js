import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import Sidebar from './Sidebar/Sidebar';
import Chat from './Chat/Chat';

import Contacts from '../../utils/contacts.json';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: sessionStorage.getItem("token"),
      username: sessionStorage.getItem("username"),
      contacts: Contacts
    };
  }

  render() {
    if (!this.state.token) return <Redirect to="/login" />;

    return (
      <Grid container spacing={0} style={{height: '100vh', width: '100%'}}>
        <CssBaseline />
        <Sidebar 
          username={this.state.username}
          contacts={this.state.contacts}
        />
        <Chat />
      </Grid>
    );
  }
}

export default Home;