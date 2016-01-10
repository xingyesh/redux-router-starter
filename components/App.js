import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CompanyActions from '../actions/company'
import {Router, Route, Link, Redirect, IndexRoute} from 'react-router'

//actions
function updateInsurances(text) {
	return {type: 'UPDATE_INSURANCES', text};
}

class Abount extends React.Component {
	constructor() {
		super();
	}
	handleClick(){
		console.log(this.props.actions([1,2,33333]));
	}
 	render(){
		return(
			<div>
				<div onClick={this.handleClick.bind(this)}>click</div>
			</div>
		)
	}
}

class App extends React.Component {
	constructor() {
		super();
	}
	componentDidMount() {
  	}
 	render(){
 		console.log(this.props)
		return(
			<div>
				<Abount actions={this.props.actions} />
				<h1>App</h1>
				<ul>
		          	<li><Link to="/about">About</Link></li>
		          	<li><Link to="/inbox">Inboxddd</Link></li>
		        </ul>
		        {this.props.children}
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    companyObj: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(updateInsurances, dispatch)  //bindActionCreators() 可以自动把多个 action 创建函数 绑定到 dispatch() 方法上
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)



