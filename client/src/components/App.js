import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Register from './Register';
import Login from './Login';

const App = () => (
  <BrowserRouter>
    <div>
      <h1>Welcome</h1>
      <ul>
        <li>
          <Link to='/login'>Log In</Link>
        </li>
        <li>
          <Link to='/register'>New User</Link>
        </li>
      </ul>
    </div>
    <Route path='/register' component={Register}/>
    <Route path='/login' component={Login}/>
  </BrowserRouter>
);

export default App;