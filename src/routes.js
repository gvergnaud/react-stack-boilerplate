import React from 'react'
import { Route } from 'react-router'

import Layout from './components/Layout'
import IndexView from './views/IndexView'

export default (
  <Route component={Layout}>
    <Route path="/"  component={IndexView} />
  </Route>
)
