import React, { Component } from 'react';
import { Form, Label, Input, Row, Col, Button } from 'reactstrap';
import { fetchData } from '../../../Redux/Actions/currencyActions';
import { connect } from 'react-redux';
class CurrencyAdd extends Component {
  state = {
    selectValue: '',
  };

  changeHandler = e => {
    this.setState({
      selectValue: e.target.value,
    });
  };

  addHandler = () => {
    this.props.fetchData(`&symbols=${this.state.selectValue}`);
  };

  render() {
    console.log(this.state.selectValue);
    return (
      <Row>
        <Col>
          <Form inline>
            <Label for="currencyCode">Add More Currencies</Label>
            <Input
              type="select"
              name="currencyCode"
              id="currencyCodeId"
              className="mx-3"
              onChange={this.changeHandler}
            >
              <option value="CNY">CNY</option>
              <option value="JPY">JPY</option>
              <option value="MYR">MYR</option>
              <option value="KRW">KRW</option>
            </Input>
            <Button color="success" onClick={this.addHandler}>
              Add
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default connect(
  null,
  { fetchData },
)(CurrencyAdd);
