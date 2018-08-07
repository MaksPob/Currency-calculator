import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Currency from './Currency.jsx';


const CurrencyList = (props) => {
  const { currency } = props;
  return (
    <div className="curren-selection">
        {currency.map(({ id, currency, url, selected }) => {
          return <Currency url={url} key={id} name={currency} select={selected}/>
        })}
  </div>
  );
}



export default connect(
  state => ({
    currency: state.currency
  }),
  dispatch => bindActionCreators({
  }, dispatch)
)(CurrencyList);