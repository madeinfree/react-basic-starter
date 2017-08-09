// React core
import React from 'react';
import { render } from 'react-dom';

// React Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './container/common/header/header.react';
import Footer from './container/common/footer/footer.react';
import Welcome from './container/welcome/welcome.react';
import Home from './container/home/home.react';
import Example from './container/example/example.react';

// Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import './lib/bootstrap/dist/bootstrap.min.css';

const store = configureStore();

const App = () =>
  <Provider store={ store }>
    <Router>
      <div>
        <Header />
        <Route exact path='/' component={ Welcome } />
        <Route path='/home' component={ Home } />
        <Route path='/example' component={ Example } />
        <Footer />
      </div>
    </Router>
  </Provider>;

render(<App />, document.getElementById('app'));

export default App;
