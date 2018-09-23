/* eslint-disable */
import { FETCH_DATA, CONVERT_MONEY, DELETE_DATA } from '../Actions/actionCreators';

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
      let updatedData = Object.assign({ rates: filteredData }, state.currencyInfo);

      return {
        ...state,
        currencyInfo: updatedData,
      };

    default:
      return state;
  }
}
