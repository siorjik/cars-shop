import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import {BrowserRouter as Router, Route, Switch, NavLink, withRouter} from 'react-router-dom';
import {Provider, connect} from "react-redux";
import {createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import Main from "./containers/Main";
import Header from "./containers/Header";

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

let App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div id="main-wrap">
          <header>
            <Header/>
          </header>
          <div className="content">
            <aside>
              <nav>
                <ul>
                  <li><NavLink to="/">Main</NavLink></li>
                </ul>
              </nav>
            </aside>
            <main>
              <Switch>
                <Route exact path="/" component={Main}/>
              </Switch>
            </main>
          </div>
          <footer>
            <h2>footer!</h2>
          </footer>
        </div>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App/>, document.getElementById('app'));

//if(module.hot) module.hot.accept(); //react-hot-reloaded