import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'

var buildStore = compose(applyMiddleware(thunk))(createStore);

export default function configureStore(initialState = {}) {
  return buildStore(rootReducer, initialState);
}