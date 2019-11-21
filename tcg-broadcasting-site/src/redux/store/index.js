import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from '../rootReducer';
import thunk from 'redux-thunk'

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;


const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  );


const store = createStore(
  persistedReducer,
  enhancer
);

let persistor = persistStore(store);

export { store, persistor };