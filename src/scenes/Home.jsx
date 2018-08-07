import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as R from 'ramda';

import Product from '../components/Product.jsx';
import CurrencyList from '../components/CurrencyList.jsx';

import './styles.scss';
import { summ } from '../utils/predicates';

const Home = (props) => {
  const { rate } = props;
  return (
    <div>
      <CurrencyList />
      <div className="products">
        {rate.map(({ product, id, price }) => {
          return <Product key={id} name={product} price={price}/>
        })}
      </div>
      <div className="summ-products">
        {R.reduce(summ, 0, rate)}
      </div>
    </div>
  );
}


export default connect(
  state => ({ 
    rate: state.rate
  }),
  dispatch => bindActionCreators({
  }, dispatch)
)(Home);