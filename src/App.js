import React, {Component} from 'react';

import store from './store';
import {Provider} from 'react-redux';
import {Route, Router} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Main from './Notify'
import {Link} from 'react-router-dom';

const history = createBrowserHistory();

/**
 * 自定义路由
 */
const routes = [
  {path: '/home', component: Main},
];

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Link to="home">Home</Link>
            {
              routes.map((route, index) =>
                <Route key={index} path={route.path} component={route.component}/>)
            }
          </div>
        </Router>
      </Provider>
    );
  }
}
