import { combineReducers } from 'redux';
import currencyReducers from './currencyReducers';

export default combineReducers({
  currencyData: currencyReducers,
});
