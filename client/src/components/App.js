import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Register from './Register';

const App = () => (
  <BrowserRouter>
    <div>
      <h1>Welcome</h1>
      <ul>
        <li>
          <Link to='/register'>New User</Link>
        </li>
      </ul>
    </div>
    <Route path='/register' component={Register}/>
  </BrowserRouter>
);

export default App;