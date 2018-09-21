import React from 'react';
import './Spinner.css';

const Spinner = () => (
  <section className="container">
    <div className="row">
      <div className="lds-default mx-auto">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  </section>
);

export default Spinner;
