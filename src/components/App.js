import React, { useState } from 'react';
import '../scss/App.scss';
import Loginpage from './Loginpage';
import Landingpage from './Landingpage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  Redirect
} from 'react-router-dom'

function App() {

  const [isLogin , changeStatus] = useState(false);

  const loginUser = () => {
    changeStatus(true);
  }

  const logoutUser = () => {
    changeStatus(false);
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Loginpage login = {loginUser}/>
        </Route>
        <Route path="/landingpage" exact>
          {isLogin ? 
          <Landingpage logout = {logoutUser} /> : 
          <Redirect to='/' />
          }
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
