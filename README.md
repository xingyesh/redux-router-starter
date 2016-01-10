# redux-router-starter
This starter is used react,react-router,redux, redux-simple-router,webpack .

##Install.
npm install -g gulp.
npm install.//install the dependcy
gulp.

##Main code
```javascript
const store = configureStore()

syncReduxAndRouter(history, store);

//add verify when get login or register user will  redirect to index page.
function userAuth(nextState, replaceState) {
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
// redux-simple routing bind the reducer to dispatch.
import { combineReducers } from 'redux'
import reducer from './reducer'
import {routeReducer} from 'redux-simple-router';

const rootReducer = combineReducers(Object.assign({}, reducer, {
  routing: routeReducer,
  reducer
}))

export default rootReducer


```
