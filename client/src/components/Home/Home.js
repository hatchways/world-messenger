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
import ChatWindow from "./Chat//ChatWindow";
import ChatBanner from "./Chat/ChatBanner";
import UserProfile from "./Profile/UserProfile";
import ContactSheet from "./Contacts//ContactSheet";
import Invites from "./Contacts/Invites";

// axios
//   // .get("/profile", {headers: {Authorization: sessionStorage.getItem("token")})

//   .get("/profile", {
//     header: { Authorization: sessionStorage.getItem("token") }
//   })

//   .then(res => {
//     console.log(res);
//     // sessionStorage.setItem("token", res.data.token);
//     // sessionStorage.setItem("username", res.data.user.username);
//     // this.setState({
//     //   redirect: true
//     // });
//   })
//   .catch(err => {
//     // this.setState({
//     //   errors: err.response.data
//     // });
//   });

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: sessionStorage.getItem("token"),
      username: sessionStorage.getItem("username"),
      firstName: sessionStorage.getItem("firstName"),
      lastName: sessionStorage.getItem("lastName"),
      contacts: sessionStorage.getItem("contacts"),
      image: sessionStorage.getItem("image")
    };
  }

  //
  // s
  //

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
              image={this.state.image}
            />
            <br />
            <br />

            <Divider />
            <Divider />
            <Invites />
            <ContactSheet contacts={this.state.ccontacts} />
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
