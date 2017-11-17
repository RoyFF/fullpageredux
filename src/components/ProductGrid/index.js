import React from 'react';
import Products from '../products';

import productRenderer from '../lib/product-renderer'

import './index.css'
const test = () => {
   let items = Object.keys(Products).sort();
    return items.map((key, i) => {
        return(
            <div className='ProductGridColumn'>
                <h2>{items[i]}</h2>
                { productRenderer(Products[key]) }
            </div>
        );
      })
}

const ProductGrid = () => {
  return (
    <div className='ProductGrid'>
      {test()}
    </div>
  )
}

export default ProductGrid;
