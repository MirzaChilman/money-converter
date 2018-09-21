/* eslint-disable */
import { FETCH_DATA, CONVERT_MONEY } from './actionCreators';
import API from '../../Utils/API';
export const fetchData = (base, symbols) => async dispatch => {
  const response = await API.fetchData(
    'base=USD',
    `&symbols=IDR&symbols=EUR&symbols=GBP&symbols=SGD`,
  );

  //convert object of rates to
  //array of rates
  let arrRates = [];
  for (let rates in response.data.rates) {
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
