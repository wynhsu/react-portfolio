import React, { Component } from 'react';
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import Home from './views/home.js';
import Breez from './views/breez.js';
import WeEat from './views/weeat.js';
import WWF from './views/wwf.js';
import Foodie from './views/foodie.js';
import About from './views/about.js';
import constants from './include/constants.js';
import './App.css';

class App extends Component {
    render() {
      return (
        <Router>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route path={constants.routes.Breez} component={Breez} />
            <Route path={constants.routes.WeEat} component={WeEat} />
            <Route path={constants.routes.WWF} component={WWF} />
            <Route path={constants.routes.Foodie} component={Foodie} />
            <Route path={constants.routes.About} component={About} />
            <Redirect to={'/'} />
          </Switch>
        </Router>
      );
    }
  }
  
  export default App;