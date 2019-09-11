import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages-components/homepage/homepage.component';
import ShopPage from './pages-components/shop/shop.component';
const HatsPage = () => (
  <div>
    <h1>THIS IS HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>
  );
}

export default App;
