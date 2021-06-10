import React from 'react';
import Hero from './components/Hero'
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalStyles'
import Products from './components/Products'
import {productData} from './components/Products/data'


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero />
      <Products heading='Escolha seu favorito!' data={productData}/>
    </Router>
  );
}

export default App;
