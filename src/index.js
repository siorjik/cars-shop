import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';

import Main from "./containers/Main";
import Header from "./containers/Header";

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
  );
}

ReactDOM.render(<App/>, document.getElementById('app'));

//if(module.hot) module.hot.accept(); //react-hot-reloaded