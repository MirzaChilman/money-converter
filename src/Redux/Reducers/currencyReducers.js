/* eslint-disable */
import { FETCH_DATA, CONVERT_MONEY } from '../Actions/actionCreators';

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
    default:
      return state;
  }
}
