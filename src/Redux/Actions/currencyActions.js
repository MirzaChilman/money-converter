/* eslint-disable */
import { FETCH_DATA, CONVERT_MONEY, DELETE_DATA, ADD_DATA } from './actionCreators';
import API from '../../Utils/API';

export const fetchData = symbols => async dispatch => {
  const response = await API.fetchData(symbols);

  // convert object of rates to
  // array of rates
  const arrRates = [];
  for (const rates in response.data.rates) {
    arrRates.push({
      currencyCode: rates,
      currencyRates: response.data.rates[rates],
    });
  }
  response.data.rates = arrRates;

  dispatch({
    type: FETCH_DATA,
    payload: response.data,
  });
};

export const convertMoney = money => async dispatch => {
  dispatch({
    type: CONVERT_MONEY,
    payload: money,
  });
};

export const deleteData = symbols => async dispatch => {
  dispatch({
    type: DELETE_DATA,
    payload: symbols,
  });
};

export const addData = symbols => async dispatch => {
  dispatch({
    type: ADD_DATA,
    payload: symbols,
  });
};
