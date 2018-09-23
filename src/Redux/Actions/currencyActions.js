/* eslint-disable */
import { FETCH_DATA, CONVERT_MONEY, DELETE_DATA, ADD_DATA } from './actionCreators';
import API from '../../Utils/API';
import { objectToArray } from '../../Utils/Utils';
export const fetchData = symbols => async dispatch => {
  const response = await API.fetchData(symbols);
  const convertedData = objectToArray(response.data.rates);
  response.data.rates = convertedData;

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
  const response = await API.fetchSingleData(`&symbols=${symbols}`);
  const convertedData = objectToArray(response.data.rates);
  response.data.rates = convertedData;
  dispatch({
    type: ADD_DATA,
    payload: response.data.rates,
  });
};
