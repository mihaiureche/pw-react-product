import React from 'react';

const Product = ({ product }) => {

    const addToCartAction = (product) => {
        window.dispatchEvent(new CustomEvent('add-to-cart', { detail: product }));
    }

    return (
        <div style={{padding: '10px'}}>
            <div>
                {product.title}
            </div>
            <div>
                <img width="300" alt={product.title} src={product.image} />
            </div>
            <div>
                <button onClick={() => addToCartAction(product)}>Add to cart</button>
            </div>
        </div>
    )
}


export default Product;