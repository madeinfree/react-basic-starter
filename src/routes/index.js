// React
import React from 'react'

// React Router
import { Route, IndexRoute } from 'react-router'

// Container
import Common from '../container/common/common.react'
import Welcome from '../container/welcome/welcome.react'
import Home from '../container/home/home.react'

const routes = (
  <Route path='/' component={ Common }>
    <IndexRoute component={ Welcome } />
    <Route path='home' component={ Home } />
  </Route>
)

export default routes
