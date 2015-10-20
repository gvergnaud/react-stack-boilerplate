import React from 'react'
import { Route } from 'react-router'

import App from './components/App'
import HiView from './views/HiView'

export default (
  <Route component={App}>
    <Route path="/"  component={HiView} />
  </Route>
)
