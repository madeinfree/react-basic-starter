import { createStore } from 'redux';
import rootReducer from '../reducers';

const configureStore = (preloadedState) => {
  const store = createStore(
                  rootReducer,
                  preloadedState
                );
                
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store;
}

export default configureStore;
