import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";

import Sidebar from './Sidebar/Sidebar';
import Chat from './Chat/Chat';

import styles from '../../styles/Home/HomeStyles';
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
      <Grid 
        container 
        spacing={0} 
        className={this.props.classes.root}
      >
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

export default withStyles(styles)(Home);