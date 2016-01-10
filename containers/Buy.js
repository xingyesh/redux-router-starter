import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Buy from '../components/buy'
// import * as CompanyActions from '../actions/company'

//actions
function updateInsurances(text) {
	return {type: 'UPDATE_INSURANCES', text};
}

class BuyContainer extends React.Component {
	constructor() {
		super();
	}
	componentDidMount() {
  	}
 	render(){
		return(
			<div>
				<Buy />
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
  mapStateToProps,
  mapDispatchToProps
)(BuyContainer)



