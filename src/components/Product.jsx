import React, { Component } from 'react';


const Product = (props) => {
  const { name, price } = props;
  return (
    <div className="product">{name}
      <div>{price}</div>
    </div>
  );
}

export default Product;