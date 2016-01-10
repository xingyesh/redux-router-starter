import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CompanyActions from '../actions/company'
import {Router, Route, Link, Redirect, IndexRoute} from 'react-router'

function updateInsurances(text) {
	return {type: 'UPDATE_INSURANCES', text};
}

class About extends React.Component {
	constructor() {
		super();
	}
	componentDidMount() {
  	}
  	handleClick(){
		console.log(this.props.dispatch(updateInsurances(['aaa', 'ccc', 'ddd'])));
	}
 	render(){
		return(
			<div><h2>About</h2>
				<div onClick={this.handleClick.bind(this)}>click</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CompanyActions, dispatch)  //bindActionCreators() 可以自动把多个 action 创建函数 绑定到 dispatch() 方法上
  }
}



export default connect(
  mapStateToProps,
)(About)



