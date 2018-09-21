import React from 'react';
import {
  Form, Label, Input, Row, Col, Button,
} from 'reactstrap';

const CurrencyAdd = () => (
  <Row>
    <Col>
      <Form inline>
        <Label for="currencyChoice">Add More Currencies</Label>
        <Input type="select" name="select" id="currencyChoice" className="mx-3">
          <option>CNY</option>
          <option>JPN</option>
          <option>MYR</option>
          <option>KRW</option>
        </Input>
        <Button color="success">Add</Button>
      </Form>
    </Col>
  </Row>
);

export default CurrencyAdd;
