// React core
import React from 'react'
import { render } from 'react-dom'

// React Router
import { Router, browserHistory } from 'react-router'
import routes from './routes/'

// Redux
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import './lib/bootstrap/dist/bootstrap.min.css'

const store = configureStore()

const App = () => (
  <Provider store={ store }>
    <Router
      history={ browserHistory }
      routes={ routes } />
  </Provider>
)

render(<App />, document.getElementById('app'))
