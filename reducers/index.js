import { combineReducers } from 'redux'
import reducer from './reducer'
import {routeReducer} from 'redux-simple-router';

const rootReducer = combineReducers(Object.assign({}, reducer, {
  routing: routeReducer,
  reducer
}))

export default rootReducer
