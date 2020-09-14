import React, { useEffect, useCallback } from 'react';
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';
import ProductsContext from './context/ProductsContext';

import ProductList from './components/ProductList/ProductList';

import 'react-notifications-component/dist/theme.css'
import './App.css';

const App = ({ products }) => {
  const ProductAddedToCart = useCallback(() => {
    store.addNotification({
      title: "Adding to cart",
      message: "The product was added to the cart !",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true
      }
    })
  }, [])

  useEffect(() => {
      window.addEventListener('product-added-to-cart', ProductAddedToCart);
  }, []);

  useEffect(() => {
      return () => {
        window.removeEventListener('product-added-to-cart', ProductAddedToCart);
      }
  })

  const contextValue = {
    products: products,
  }

  return (
    <div className="App-Products">
      <ProductsContext.Provider value={contextValue}>
        <ReactNotification />
        <ProductList />
      </ProductsContext.Provider>
    </div>
  );
}

export default App;
