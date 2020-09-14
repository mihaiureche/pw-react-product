import React, { useContext } from 'react';
import ProductsContext from '../../context/ProductsContext';

import Product from '../Product/Product';


const ProductList = () => {
    const { products } = useContext(ProductsContext);
    return (
        <div style={{display: 'flex'}}>
            { products ? products.map((el) => <Product key={el.id} product={el} />) : 'No product exists in database !' }
        </div>
    )
}


export default ProductList;