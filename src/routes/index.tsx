import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';

const routes: React.FC = () => (
  <Switch>
    <Route path="/" exact />
    <Route path="/home" component={Home} />
  </Switch>
);

export default routes;
