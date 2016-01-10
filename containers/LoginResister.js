import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from '../components/login'
import Register from '../components/register'
import UserInfo from '../components/userinfo'
// import * as CompanyActions from '../actions/company'

//actions
function updateInsurances(text) {
	return {type: 'UPDATE_INSURANCES', text};
}

class LoginResister extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
  	}
 	render(){
 		let Content = null;
 		if (this.props.params.id == 'register') {
 			Content = Register
 		} else if (this.props.params.id == 'login') {
 			Content = Login
 		} else if (this.props.params.id == 'info') {
 			Content = UserInfo
 		} else {
 			Content = Login
 		}
		return(
			<div>
				<Content dispatch={this.props.dispatch}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(updateInsurances, dispatch)  //bindActionCreators() 可以自动把多个 action 创建函数 绑定到 dispatch() 方法上
  }
}

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(LoginResister)



