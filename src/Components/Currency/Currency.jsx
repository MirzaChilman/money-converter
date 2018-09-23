import React from 'react';
import { Jumbotron } from 'reactstrap';
import CurrencyHeader from './CurrencyHeader/CurrencyHeader';
import CurrencyLists from './CurrencyLists/CurrencyLists';
import CurrencyAdd from './CurrencyAdd/CurrencyAdd';

const Currency = () => (
  <React.Fragment>
    <Jumbotron className="my-5">
      <CurrencyHeader />
      <CurrencyLists />
      <CurrencyAdd />
    </Jumbotron>
  </React.Fragment>
);

export default Currency;
