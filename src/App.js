import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRout';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h2>Friends Database</h2>
          <Link className='links' to='/login'>Login</Link>
          <Link className='links' to='/friends'>Friends List</Link>
          <Link className='links' to='/friends/add'>Add Friends</Link>
          <Link className='links' to='/logout'>Logout</Link>
        </header>
        <Route exact path='/'>
          <Login/>
        </Route>

        <Route exact path='/login'>
          <Login/>
        </Route>

        <PrivateRoute exact path='/friends'>
          <FriendsList/>
        </PrivateRoute>

        <PrivateRoute exact path='/friends/add'>
          <AddFriends/>
        </PrivateRoute>

        <Route exact path='/logout'>
          <Logout/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
