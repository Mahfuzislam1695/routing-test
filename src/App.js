import React from 'react';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import FriendDetails from './Components/FriendDetails/FriendDetails';

const App = () => {
  return (
    <div>
      
      <Router>

        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/friend/:friendId">
            <FriendDetails/>
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>
          
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>

        </Switch>

      </Router>
    </div>
  );
};

export default App;