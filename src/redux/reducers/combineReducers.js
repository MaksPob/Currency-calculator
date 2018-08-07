import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { rate } from './rate';
import { currency } from './selectCurr';

export default combineReducers({
  routing: routerReducer,
  rate,
  currency
});