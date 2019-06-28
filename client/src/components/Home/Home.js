import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import Badge from "@material-ui/core/Badge";
// import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
// import Link from "@material-ui/core/Link";
//Components
import ChatWindow from "./Chat/ChatWindow";
import ChatBanner from "./Chat/ChatBanner";
import UserProfile from "./Profile/UserProfile";
import ContactSheet from "./Contacts/ContactSheet";
import Search from "./Contacts/Search";
import Invites from "./Contacts/Invites";

// const drawerWidth = 240;

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex"
//   },
//   toolbar: {
//     paddingRight: 24 // keep right padding when drawer closed
//   },
//   toolbarIcon: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     padding: "0 8px",
//     ...theme.mixins.toolbar
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen
//     })
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen
//     })
//   },

//   title: {
//     flexGrow: 1
//   },

//   drawerPaper: {
//     position: "relative",
//     whiteSpace: "nowrap",
//     width: drawerWidth,
//     height: "20vh"
//   },

//   drawerStyle: {
//     width: drawerWidth,
//     background: "#ecf0f1",
//     height: "100vh",
//     overflow: "hidden",
//     flexGrow: 1,
//     maxWidth: "50vh",
//     position: "relative"
//   },

//   chat: {
//     flexGrow: 1,
//     height: "100vh",

//     backgroundColor: "#1AB7EA"
//   },

//   paper: {
//     padding: theme.spacing(2),
//     display: "flex",
//     overflow: "auto",
//     flexDirection: "column"
//   },
//   fixedHeight: {
//     height: 240
//   }
// }));

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: sessionStorage.getItem("token"),
      username: sessionStorage.getItem("username")
    };
  }

  render() {
    if (!this.state.token) return <Redirect to="/login" />;
    // const classes = useStyles();

    return (
      <div
      // className={classes.root}
      >
        <CssBaseline />

        <Drawer variant="permanent">
          <div
          // className={classes.drawerStyle}
          >
            <UserProfile />
            <br />
            <br />

            <Divider />
            <Divider />
            <Search />
            <Invites />
            <ContactSheet />
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
