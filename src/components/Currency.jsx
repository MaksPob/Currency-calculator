import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getPrice } from '../redux/actions/rate';


const Currency = (props) => {
  const { name, url, select, getPrice } = props;
  return (
    <div onClick={()=> getPrice({ url, name })} className={!select ? "currency" : "selected-сurrency"}>
      {name}
    </div>
  );
}



export default connect(
  state => ({
  }),
  dispatch => bindActionCreators({
    getPrice
  }, dispatch)
)(Currency);
