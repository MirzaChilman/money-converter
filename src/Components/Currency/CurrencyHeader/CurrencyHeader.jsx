import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Label, Input } from 'reactstrap';
import { convertMoney } from '../../../Redux/Actions/currencyActions';
import { codeToText } from '../../../Utils/Utils';
class CurrencyHeader extends Component {
  convertPrice = event => {
    this.props.convertMoney(event.target.value);
  };
  render() {
    const { base } = this.props.currencyState;
    return (
      <React.Fragment>
        <h3>{`${base}-${codeToText(base)}`}</h3>
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

CurrencyHeader.propTypes = {
  convertMoney: PropTypes.func.isRequired,
  currencyState: PropTypes.any,
};

const mapStateToProps = state => ({
  currencyState: state.currencyData.currencyInfo,
});

export default connect(
  mapStateToProps,
  { convertMoney },
)(CurrencyHeader);
