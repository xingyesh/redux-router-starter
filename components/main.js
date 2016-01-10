import React, { Component, PropTypes } from 'react'
import { pushPath } from 'redux-simple-router'
import {Slider, Form, Input} from 'amazeui-react'

function updateInsurances(text) {
	return {type: 'UPDATE_INSURANCES', text};
}

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen:false,
			value:''
		}
	}
	componentDidMount() {
		 // console.log('Main', this.props);
		 // this.props.dispatch(updateInsurances([1,2,3]));
  	}
  	onSelect(index, direction) {
  		console.log('', index, '', direction);
  	}
  	handleChange(){

  	}
  	pathRedirect() {
  		this.props.dispatch(pushPath('/buy'));
  	}
  	_openModal() {
  		this.setState({isOpen:true});
  	}
  	_onDismiss() {
  		this.setState({isOpen:false});
  	}
 	render(){
 		const title = <div style={{'float': 'left'}}>弹出框标题 盗抢险</div>
		return(
			<div className='mian'>
				<div className='m-first'>
					<div className='m-slider'>
						 <Slider onSelect={this.onSelect.bind(this)}>
					    <Slider.Item>
					      <img height='300px' src="../css/img/logo/react.png"/>
					    </Slider.Item>
					    <Slider.Item>
					    	<img height='300px' src="../css/img/logo/nodejs.png"/></Slider.Item>
					    <Slider.Item>
					      <img height='300px' src="../css/img/logo/react.png"/></Slider.Item>
					    <Slider.Item>
					      <img height='300px'
					        src="../css/img/logo/webpack.png"/></Slider.Item>
					  </Slider>
					</div>
					<div className='m-info'>
						<div>xxx</div>
						<Form style={{width:'60%',margin:'30px'}}>
					    <Input value={this.state.vlue} placeholder="xxx"
						        validation='success'
						        label='xxx'
						        hasFeedback
						        ref="email" 
						        onChange={this.handleChange.bind(this)} />
				         <Input value={this.state.vlue} placeholder="xxx"
						        validation='success'
						        label='xxx'
						        hasFeedback
						        ref="password" 
						        onChange={this.handleChange.bind(this)} />
				        <Input value={this.state.vlue} placeholder="xxx"
						        validation='success'
						        label='xxx'
						        hasFeedback
						        ref="password" 
						        onChange={this.handleChange.bind(this)} />
						 <Input type='button' value='xxxx' onChange={this.handleChange.bind(this)} />
					  </Form>
					</div>
				</div>
				<button onClick={this.pathRedirect.bind(this)}>redirect 111</button>
			</div>
		)
	}
}

export default Main