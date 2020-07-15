import React, { useState , useEffect } from 'react';
import '../scss/App.scss';
import Loginpage from './Loginpage';
import Landingpage from './Landingpage';
import Errorpage from './Error';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation,
  useHistory,
} from 'react-router-dom';

function App() {

  const [isLogin , changeStatus] = useState({user: null, isLogin: false });

  const loginUser = (auth) => {
    changeStatus(auth);
  }

  const logoutUser = (auth) => {
    changeStatus(auth);
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Loginpage login = {loginUser}/>
        </Route>
        <Route path="/landingpage/:user" exact>
          {isLogin ? 
          <Landingpage logout = {logoutUser} /> : 
          <Redirect to='/' />
          }
        </Route>
        <Route path="*">
            <Errorpage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
