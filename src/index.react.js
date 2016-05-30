// React core
import React, { Component } from 'react';
import { render } from 'react-dom';

// React Router
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

// Container
import Common from './container/common/common.react';
import Welcome from './container/welcome/welcome.react';
import Home from './container/home/home.react';

// Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router history={ browserHistory }>
          <Route path="/" component={ Common }>
            <IndexRoute component={ Welcome } />
            <Route path="home" component={ Home } />
          </Route>
        </Router>
      </Provider>
    );
  }
};

render(<App />, document.getElementById('app'));
