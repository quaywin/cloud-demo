import { createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux-subspace'
import logger from 'redux-logger';
import rootReducers from '../reducers';

const middlewares = [];
middlewares.push(thunk);
middlewares.push(logger);

const applyEnchancer = applyMiddleware(...middlewares);
const enchancer = compose(applyEnchancer);

const reducers = combineReducers({
  ...rootReducers,
});

const store = createStore(
  reducers, 
  {},
  enchancer,
);

export default store;