/* eslint-disable */
import { FETCH_DATA, CONVERT_MONEY, DELETE_DATA, ADD_DATA } from '../Actions/actionCreators';

const initialState = {
  currencyInfo: [],
  money: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        currencyInfo: action.payload,
      };
    case CONVERT_MONEY:
      return {
        ...state,
        money: action.payload,
      };
    case DELETE_DATA:
      let filteredData = state.currencyInfo.rates.filter(el => action.payload !== el.currencyCode);
      state.currencyInfo.rates = filteredData;
      let remainingData = Object.assign({ rates: filteredData }, state.currencyInfo);
      return {
        ...state,
        currencyInfo: remainingData,
      };
    case ADD_DATA:
      let addedData = state.currencyInfo.rates.concat(action.payload);
      state.currencyInfo.rates = addedData;
      let updatedData = Object.assign({ rates: addedData }, state.currencyInfo);

      return {
        ...state,
        currencyInfo: updatedData,
      };
    default:
      return state;
  }
}
