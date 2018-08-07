import * as R from 'ramda';

const initialState = [
  {id: 1, currency: "USD", url: "USD", selected: true},
  {id: 2, currency: "Rub", url: "RUB", selected: false },
  {id: 3, currency: "Eur", url: "EUR", selected: false },
  {id: 4, currency: "Pound", url: 'GBP', selected: false },
  {id: 5, currency: "Yen", url: "JPY", selected: false }
];
    
const currency = (state = initialState, action) => {
  switch (action.type) {
      case 'CHANGE_SELECT':
        return findCurrency(state, action.payload);
      default:
        return state;
  }
};


const findCurrency = (store, checkCurrency) => {
  const changeSelected = ({ id, currency, url, selected }) =>
    (currency === checkCurrency 
      ? { id, currency, url, selected: true } 
      : { id, currency, url, selected: false }
    );
  return R.map(changeSelected, store);
}

export {
  currency
};
