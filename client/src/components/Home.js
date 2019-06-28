import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import axios from "axios";

//Components
import ChatWindow from "./ChatWindow";
import ChatBanner from "./ChatBanner";
import UserProfile from "./UserProfile";
import ContactSheet from "./ContactSheet";
import Invites from "./Invites";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: sessionStorage.getItem("token"),
      username: sessionStorage.getItem("username"),
      userimg: sessionStorage.getItem("userimg"),
      contacts: sessionStorage.getItem("contacts"),
      invites: sessionStorage.getItem("invites")
    };
  }

  render() {
    if (!this.state.token) return <Redirect to="/login" />;
    // const classes = useStyles();

    return (
      <div>
        <CssBaseline />

        <Drawer variant="permanent">
          <div>
            <UserProfile
              username={this.state.username}
              userimg={this.state.userimg}
            />
            <br />
            <br />

            <Divider />
            <Divider />
            <Invites />
            <ContactSheet contacts={this.state.contacts} />
          </div>
        </Drawer>

        <div
        // className={classes.chat}
        >
          <ChatBanner />

          <ChatWindow />
        </div>
      </div>
    );
  }
}

export default Home;
