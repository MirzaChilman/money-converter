import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchData } from '../../../Redux/Actions/currencyActions';
import CurrencyDelete from './CurrencyDelete/CurrencyDelete';
import CurrencyDetails from './CurrencyDetails/CurrencyDetails';
import Spinner from '../../Spinner/Spinner';

class CurrencyLists extends Component {
  state = {
    isLoading: true,
  };

  async componentDidMount() {
    const { fetchData } = this.props;
    await fetchData();
    this.setState({
      isLoading: false,
    });
  }

  render() {
    const { rates } = this.props.currencyState;
    return (
      <Row className="mb-3">
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          rates.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <CurrencyDetails {...data} />
                <CurrencyDelete
                  id={index}
                  currencyCode={data.currencyCode}
                  deleteHandler={this.deleteHandler}
                />
              </React.Fragment>
            );
          })
        )}
      </Row>
    );
  }
}

CurrencyLists.propTypes = {
  fetchData: PropTypes.func.isRequired,
  currencyState: PropTypes.any,
};

const mapStateToProps = state => ({
  currencyState: state.currencyData.currencyInfo,
});

export default connect(
  mapStateToProps,
  { fetchData },
)(CurrencyLists);
