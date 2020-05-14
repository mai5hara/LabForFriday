import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Test from './components/Test';
import Egg1 from './components/Egg1';
import Egg2 from './components/Egg2';

import ReactMediaComp from './components/ReactMediaComp';
import './App.css';

function App() {
  return (
    <div className="App">
      <Test seconds={10} />
      <ReactMediaComp />
      <Switch>
        <Route path="/" exact component={Menu} />
        <Route path="/egg1" component={Egg1} />
        <Route path="/egg2" component={Egg2} />
      </Switch>
    </div>
  );
}

export default App;
