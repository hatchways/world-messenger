import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/styles";

import styles from "../../styles/FormStyles";
import StyledButton from "../../styles/StyledButton";

const ButtonLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
    redirect: false
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    axios
      .post("/api/users/login", { email, password })
      .then(res => {
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("username", res.data.user.username);
        sessionStorage.setItem(
          "image",
          JSON.stringify(res.data.user.profile.image)
        );
        sessionStorage.setItem("id", res.data.user._id);
        sessionStorage.setItem(
          "firstName",
          JSON.stringify(res.data.user.profile.firstName)
        );
        sessionStorage.setItem(
          "lastName",
          JSON.stringify(res.data.user.profile.lastName)
        );

        sessionStorage.setItem(
          "contacts",
          JSON.stringify(res.data.user.profile.contacts)
        );

        this.setState({
          redirect: true
        });
      })
      .catch(err => {
        this.setState({
          errors: err.response.data
        });
      });
  };

  closeError = () => {
    this.setState({
      errors: {}
    });
  };

  render() {
    if (this.state.redirect) return <Redirect to="/home" />;
    return (
      <Grid
        item
        container
        sm
        direction="column"
        alignItems="center"
        spacing={3}
        className={this.props.classes.root}
      >
        <Grid
          item
          container
          justify="flex-end"
          spacing={3}
          alignItems="center"
          className={this.props.classes.header}
        >
          <Grid item>
            <Typography variant="body1">Don't have an account?</Typography>
          </Grid>
          <Grid item>
            <StyledButton component={ButtonLink} to="/register">
              Create Account
            </StyledButton>
          </Grid>
        </Grid>

        <Grid item className={this.props.classes.body}>
          <form>
            <Grid container direction="column" spacing={4} justify="center">
              <Grid item>
                <Typography variant="h4" className={this.props.classes.title}>
                  Welcome back!
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  label="E-mail address"
                  name="email"
                  type="email"
                  onChange={this.onChange}
                  value={this.state.email}
                  error={this.state.errors.hasOwnProperty("email")}
                  helperText={this.state.errors.email || ""}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  onChange={this.onChange}
                  value={this.state.password}
                  error={this.state.errors.hasOwnProperty("password")}
                  helperText={this.state.errors.password || ""}
                  fullWidth
                />
              </Grid>
            </Grid>
          </form>
        </Grid>

        <Grid item className={this.props.classes.submit}>
          <StyledButton color="blue" onClick={this.onSubmit}>
            Login
          </StyledButton>
        </Grid>

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          open={this.state.errors.hasOwnProperty("msg")}
          message={this.state.errors.msg || ""}
          onClose={this.closeError}
          action={
            <IconButton key="close" color="inherit" onClick={this.closeError}>
              <Icon className="fas fa-times" />
            </IconButton>
          }
        />
      </Grid>
    );
  }
}

export default withStyles(styles)(Login);
