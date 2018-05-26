import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import {BrowserRouter as Router, Route, Switch, NavLink, withRouter} from 'react-router-dom';
import {Provider, connect} from "react-redux";
import {createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {fetchCars} from "./actions/carsActions";
import {fetchMotos} from "./actions/motoActions";

import Main from "./containers/Main";
import Header from "./containers/Header";
import Cars from "./containers/Cars";
import Moto from "./containers/Moto";
import ViewProduct from "./containers/ViewProduct";

//admin
import Admin from "./admin/Admin";

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

//start-loading in store with async. actions
store.dispatch(fetchCars());
store.dispatch(fetchMotos());

let App = () => {
  return (
    <Router>
      <div id="main-wrap">
        <header>
          <Header/>
        </header>
        <div className="content">
          <aside>
            <nav>
              <ul>
                <li><NavLink exact to="/" activeClassName="active">Main</NavLink></li>
                <li><NavLink to="/cars" activeClassName="active">Cars</NavLink></li>
                <li><NavLink to="/moto" activeClassName="active">Motorcycles</NavLink></li>
              </ul>
            </nav>
          </aside>
          <main>
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route path="/cars" component={Cars}/>
              <Route path="/moto" component={Moto}/>
              <Route path="/view_product/:type/:_id" component={ViewProduct}/>
            </Switch>
          </main>
        </div>
        <footer>
          <h2>footer!</h2>
        </footer>
      </div>
    </Router>
  );
}

let MainApp;
if(window.location.pathname === "/admin") MainApp = () => <Admin/>;
else MainApp = () => <App/>;

ReactDOM.render(<Provider store={store}><MainApp/></Provider>, document.getElementById('app'));