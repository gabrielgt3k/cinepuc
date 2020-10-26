import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SelectSeat from './pages/SelectSeat';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/seat" exact component={SelectSeat} />
    </Switch>
  );
};

export default Routes;
