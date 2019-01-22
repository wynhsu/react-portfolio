import React, { Component } from 'react';
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import Home from './views/home.js';
import Breez from './views/breez.js';
import WeEat from './views/weeat.js';
import Foodie from './views/foodie.js';
import EcoSnap from './views/ecosnap.js';
import CourtVision from './views/courtvision.js';
import WWF from './views/wwf.js';
import About from './views/about.js';
import Navbar from './components/navbar.js';
import constants from './include/constants.js';
import './App.css';

class App extends Component {
    render() {
      return (
        <Router>
          <Switch>
            <Route exact path={constants.routes.Work} component={Home} />
            <Route path={constants.routes.Breez} component={Breez} />
            <Route path={constants.routes.WeEat} component={WeEat} />
            <Route path={constants.routes.Foodie} component={Foodie} />
            <Route path={constants.routes.EcoSnap} component={EcoSnap} />
            <Route path={constants.routes.CourtVision} component={CourtVision} />
            <Route path={constants.routes.WWF} component={WWF} />
            <Route path={constants.routes.About} component={About} />
            <Redirect to={constants.routes.Work} />
          </Switch>
        </Router>
      );
    }
  }
  
  export default App;