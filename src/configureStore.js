import { createStore, applyMiddleware, compose } from 'redux'
import { createHistory } from 'history'
import routes from './routes'
import rootReducer from './reducers'
// middlewares
import { reduxReactRouter } from 'redux-router'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import normalize from './middleware/normalize'
import errorCatcher from './middleware/errorCatcher'

const finalCreateStore = compose(
  applyMiddleware(
    errorCatcher,
    thunk,
    normalize
  ),
  reduxReactRouter({ routes, createHistory }),
  applyMiddleware(createLogger())
)(createStore)

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
