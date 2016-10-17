// React core
import React from 'react'
import { render } from 'react-dom'

// React Router
import { BrowserRouter, Match } from 'react-router'

import Header from './container/common/header/header.react'
import Footer from './container/common/footer/footer.react'
import Welcome from './container/welcome/welcome.react'
import Home from './container/home/home.react'
import Example from './container/example/example.react'

// Redux
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import './lib/bootstrap/dist/bootstrap.min.css'

const store = configureStore()

const App = () => (
  <Provider store={ store }>
    <BrowserRouter>
      <div>
        <Header />
        <Match exactly pattern='/' component={ Welcome } />
        <Match pattern='/home' component={ Home } />
        <Match pattern='/example' component={ Example } />
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
)

render(<App />, document.getElementById('app'))
