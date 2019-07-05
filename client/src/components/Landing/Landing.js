import React from "react";
import { Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

import Register from "./Register";
import Login from "./Login";

import icon from "../../assets/chat-bubble.png";
import styles from "../../styles/Landing/LandingStyles";

const Landing = props => {
  return (
    <Grid container spacing={0} className={props.classes.root}>
      <Grid item sm={5} className={props.classes.sidebarBackground}>
        <Grid
          container
          direction="column"
          alignItems="center"
          className={props.classes.sidebar}
          spacing={4}
        >
          <Grid item className={props.classes.sidebarIcon}>
            <img src={icon} alt="icon" />
          </Grid>
          <Grid item className={props.classes.sidebarText}>
            <Typography variant="h4" align="center">
              Converse with anyone with any language
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Switch>
        <Route path="/register" component={Register} />
        <Route path={["/", "/login"]} component={Login} />
      </Switch>
    </Grid>
  );
};

export default withStyles(styles)(Landing);
