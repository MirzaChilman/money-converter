import React from 'react';
import {
  Card, CardTitle, CardText, Col,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CurrencyDetails = (props) => {
  const {
    currencyCode, currencyRates, baseState, moneyState,
  } = props;
  return (
    <Col lg="10">
      <Card body>
        <section className="d-flex justify-content-between">
          <CardTitle>{currencyCode}</CardTitle>
          <CardTitle>{(moneyState * currencyRates).toFixed(2)}</CardTitle>
        </section>
        <CardText>{`${currencyCode}-${currencyRates}`}</CardText>
        <p className="lead">{`1${baseState}=${currencyRates}`}</p>
      </Card>
    </Col>
  );
};

CurrencyDetails.propTypes = {
  currencyCode: PropTypes.string.isRequired,
  currencyRates: PropTypes.number.isRequired,
  baseState: PropTypes.string.isRequired,
  moneyState: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  moneyState: state.currencyData.money,
  baseState: state.currencyData.currencyInfo.base,
});
export default connect(mapStateToProps)(CurrencyDetails);
