import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import Home from './routes/Home'
import Contact from './routes/Contact'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Redirect path="/" to={'/home'} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
