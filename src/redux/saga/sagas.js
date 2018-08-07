import axios from 'axios';
import * as R from 'ramda';
import { call, put, takeEvery, select } from 'redux-saga/effects';

import { savePrice } from '../actions/rate';
import { changeSelected } from '../actions/selectCurr';
import { initialState } from '../reducers/rate';


function* getRate({ payload }) {
  const { url, name } = payload;
  (name === "USD") 
    ? yield getUSDRate(initialState, name)
    : yield getAllRate(url, name);
}


function* getUSDRate(state, name) {
  yield put(savePrice(state));
  yield put(changeSelected(name));
}


function* getAllRate(url, name) {
  try {
    const response = yield call(axios.get,`http://data.fixer.io/api/latest?access_key=20719c60f5175160816cff975b15a5ff&base=USD&symbols=${url}`);
    const rates = R.prop(url, response.data.rates);
    const getCurrency = R.prop("rate");
    const currency = yield select(getCurrency);
    const changePrice = ({ id, price, product }) =>
      ({ id,
        price: (price * rates).toFixed(3),
        product
      });
    const newCurrency = R.map(changePrice, currency);
    yield put(changeSelected(name));
    yield put(savePrice(newCurrency));
  } catch (err) {
    console.log(err);
  }
}


function* sagas() {
  yield takeEvery("PRICE", getRate);
}

export default sagas;
