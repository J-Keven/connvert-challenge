import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import DebtsList from '../pages/DebtsList';
import CreateDebt from '../pages/CreateDebt';
import UpdateDebt from '../pages/UpdateDebt';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/debtsList/:id" exact component={DebtsList} />
      <Route path="/createDebt" component={CreateDebt} />
      <Route path="/debtsList/updateDebt/:debtId" component={UpdateDebt} />
    </Switch>
  );
};

export default Routes;
