// React core
import React from 'react'
import { render } from 'react-dom'

// React Router
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

// Container
import Common from './container/common/common.react'
import Welcome from './container/welcome/welcome.react'
import Home from './container/home/home.react'

// Redux
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import './lib/bootstrap/dist/bootstrap.min.css'

const store = configureStore()

const routes = (
  <Route path='/' component={ Common }>
    <IndexRoute component={ Welcome } />
    <Route path='home' component={ Home } />
  </Route>
)

const App = () => (
  <Provider store={ store }>
    <Router
      history={ browserHistory }
      routes={ routes } />
  </Provider>
)

render(<App />, document.getElementById('app'))
