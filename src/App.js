/* eslint-disable */
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Currency from './Components/Currency/Currency';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Currency />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default App;
