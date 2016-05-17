//React core
import React, { Component } from 'react';
import { render } from 'react-dom';

//React Router
import { Router, Route, Link, browserHistory } from 'react-router';

//Components
import Common from './component/common/common.react';
import Home from './component/home/home.react';

export default class App extends Component {
  render() {

    const routers = (
      <Route path="/" component={ Common }>
        <Route path="home" component={ Home } />
      </Route>
    )

    return (
      <Router history={ browserHistory } routes={ routers } />
    );
  }
};

render(<App />, document.getElementById('app'));
