import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import About from './About';
import Error from './Error';

import requireAuth from './utils/requireAuth';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={requireAuth(Home)} />
      <Route path="/about" component={requireAuth(About)} />
      <Route path="/login" component={Login} />
      <Route component={Error} />
    </Switch>
  </Router>
);

export default Routes;