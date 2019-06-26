import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: sessionStorage.getItem('token'),
      username: sessionStorage.getItem('username')
    };
  }

  render() {
    if (!this.state.token) return <Redirect to='/login'/>
    return (
      <div>
        <h1>Welcome {this.state.username}</h1>
      </div>
    );
  }
}

export default Home;