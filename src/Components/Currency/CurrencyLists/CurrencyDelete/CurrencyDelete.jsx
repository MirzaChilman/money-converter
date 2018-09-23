/* eslint-disable */
import React, { Component } from 'react';
import { Col, Card, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteData } from '../../../../Redux/Actions/currencyActions';

class CurrencyDelete extends Component {
  render() {
    return (
      <Card body>
        <Button color="danger" onClick={() => this.props.deleteData(this.props.currencyCode)}>
          Delete
        </Button>
        {/* <Button color="danger" onClick={() => this.props.deleteHandler(this.props.id)}>
          Delete
        </Button> */}
      </Card>
    );
  }
}

CurrencyDelete.propTypes = {
  id: PropTypes.number.isRequired,
};
const mapStateToProps = state => ({
  currencyState: state.currencyData.currencyInfo,
});
export default connect(
  mapStateToProps,
  { deleteData },
)(CurrencyDelete);
