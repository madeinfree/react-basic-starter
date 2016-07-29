import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'

const logger = createLogger();

const reducerDefault = require('../reducers').default

const configureStore = (preloadedState) => {
  const store = createStore(
                  rootReducer,
                  preloadedState,
                  applyMiddleware(logger)
                )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = reducerDefault
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
