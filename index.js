import React from 'react'
import { render } from 'react-dom'
import {createStore, combineReducers, compose, bindActionCreators,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import createHashHistory from 'history/lib/createHashHistory';
import {syncReduxAndRouter, routeReducer, pushPath} from 'redux-simple-router';

import {Router, Route, Redirect, IndexRoute} from 'react-router'

import configureStore from './store/configureStore'

import Header from './components/header'
import MainContainer from './containers/MainContainer'
import Buy from './containers/Buy'
import LoginResister from './containers/LoginResister'


function updateInsurances(text) {
  return {type: 'UPDATE_INSURANCES', text};
}

class Inbox extends React.Component {
    constructor(props){
      super(props);
    }
    render() {
      return(
        <div>
          <h2>actives</h2>
        </div>
      )
    }
}

let history = createHashHistory({
  queryKey: false
});

const store = configureStore()

syncReduxAndRouter(history, store);

//add verify when get login or register user will  redirect to index page.
function userAuth(nextState, replaceState) {
  console.log('nextState.location.pathname', nextState.params.id);
  if (nextState.params.id === 'register' || nextState.params.id === 'login') {
    if (sessionStorage.email ) {
      replaceState(null, '/');
    }
  } else if (nextState.params.id === 'signout' ) {
    sessionStorage.clear();
    replaceState(null, '/user/login');
  }
}

render(
  <Provider store={store}>
     <Router history={history}>
    	<Route path="/" component={Header}>
    		<IndexRoute component={MainContainer} />
	        <Route path="buy" component={Buy}/>
	        <Route path="actives" component={Inbox}/>
          <Route path='user' component={LoginResister} >
            <Route path=":id" component={LoginResister} onEnter={userAuth} />
          </Route>
      	</Route>
      </Router>
  </Provider>,
  document.getElementById('router')
)