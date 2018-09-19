import React from 'react';
import './Wrapper.css';
const Wrapper = props => (
    <section className="wrapper">{props.children}</section>
);

export default Wrapper;
