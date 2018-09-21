import React, { Component } from 'react';
import { connect } from 'react-redux';
import Utils from '../../../Utils/Utils';
import { Label, Input } from 'reactstrap';
import { convertMoney } from '../../../Redux/Actions/currencyActions';
class CurrencyHeader extends Component {
  convertPrice = event => {
    this.props.convertMoney(event.target.value);
  };
  render() {
    const { base } = this.props.currencyState;
    console.log(this.props);
    return (
      <React.Fragment>
        <h3>{`${base}-${Utils.codeToText(base)}`}</h3>
        <Label>{base}</Label>
        <Input
          type="number"
          className="form-control mb-2"
          bsSize="sm"
          onChange={this.convertPrice}
          placeholder="Input your money here"
          style={{ width: '50%' }}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  currencyState: state.currencyData.currencyInfo,
});

export default connect(
  mapStateToProps,
  { convertMoney },
)(CurrencyHeader);
