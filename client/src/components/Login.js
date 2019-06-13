import React from 'react';

const Login = () => (
  <div>
    <h1>Log In</h1>
    <form action='http://localhost:5000/api/users/login' method='post'>
      <p>Email:</p>
      <input type='email' name='email'></input>
      <p>Password:</p>
      <input type='password' name='password'></input>
      <br></br>
      <input type="submit" value="Submit"></input>
    </form>
  </div>
);

export default Login;