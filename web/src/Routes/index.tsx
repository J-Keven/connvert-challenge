import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import DebtsList from '../pages/DebtsList';
import CreateDebt from '../pages/CreateDebt';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/debtsList" exact component={DebtsList} />
      <Route path="/createDebt" exact component={CreateDebt} />
    </Switch>
  );
};

export default Routes;
