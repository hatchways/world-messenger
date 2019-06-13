import React from 'react';

const Register = () => (
  <div>
    <h1>New User</h1>
    <form action='http://localhost:5000/api/users/register' method='post'>
      <p>Name:</p>
      <input type='text' name='name'></input>
      <p>Email:</p>
      <input type='email' name='email'></input>
      <p>Password:</p>
      <input type='password' name='password'></input>
      <p>Language:</p>
      <input type='text' name='language'></input>
      <br></br>
      <input type="submit" value="Submit"></input>
    </form>
  </div>
);

export default Register;