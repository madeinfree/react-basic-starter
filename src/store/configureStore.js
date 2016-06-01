import { createStore } from 'redux';
import rootReducer from '../reducers';

const reducerDefault = require('../reducers').default;

const configureStore = (preloadedState) => {
  const store = createStore(
                  rootReducer,
                  preloadedState
                );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = reducerDefault;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
