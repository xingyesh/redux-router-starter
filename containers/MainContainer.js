import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main from '../components/main'
// import * as CompanyActions from '../actions/company'

//actions
function updateInsurances(text) {
	return {type: 'UPDATE_INSURANCES', text};
}

class MainContainer extends React.Component {
	constructor() {
		super();
	}
	componentDidMount() {
  	}
 	render(){
		return(
			<div>
				<Main dispatch={this.props.dispatch} />
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
  mapStateToProps
)(MainContainer)



