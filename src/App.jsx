import React from 'react';
import Hero from './components/Hero'
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalStyles'
import Products from './components/Products'
import {productData, productDataTwo} from './components/Products/data'
import Feature from './components/Feature'


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero />
      <Products heading='Escolha seu favorito!' data={productData}/>
      <Feature />
      <Products heading='Escolhas premium!' data={productDataTwo}/>
    </Router>
  );
}

export default App;
