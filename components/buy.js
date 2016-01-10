import React from 'react'
import { render } from 'react-dom'
// import Modal from './modal'
import {Flows} from '../constants/constants'
import {Button, Modal, ModalTrigger, DateTimeInput} from 'amazeui-react';

import {Router, Route, Link, Redirect} from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import Redux from 'redux'
import Thunk from 'redux-thunk'


class Buy extends React.Component{
	constructor(props){ 
		super(props);
		this.state = {
			isOpen:false,
			actived:3
		};
	}
	_open() {
		this.setState({isOpen:true});
	}
	_onDismiss() {
		this.setState({isOpen:false});
	}
	onConfirm() {
		console.log('confirm');
	}
	onCancel() {
		console.log('cancled');
	}
	_prevStep() {
		const actived = this.state.actived - 1;
		if(actived >= 0) {
			this.setState({actived:actived});
		}
	}
	_nextStep() {
		const actived = this.state.actived + 1;
		if(actived < 5) {
			this.setState({actived:actived});
		}
	}
	render(){
		let flows = Flows.map((item, index)=>{
			const styleSet = index === this.state.actived ? 'flow-title active' : 'flow-title';
			return <div key={item.key} className={styleSet}><div>{item.label}</div></div>;
		})
		// let Content = <div>test</div>;

		let title = <div style={{'float': 'left'}}>modalxxx</div>
		let modal = <Modal type="confirm" title={title}>ddddddddd</Modal>;
		return(
			<div className='buy-process'>
				<div>1111</div>
				<div className='flows'>
					{flows}
				</div>
				<div className='buy-content'>
					<div>content </div>
				</div>
				<br />
				<br />
				<br />
				<div>
					<Button onClick={this._prevStep.bind(this)} className='button' >上一步</Button>
					<Button onClick={this._nextStep.bind(this)} className='button' >下一步</Button>
				</div>
			</div>

		)
	}
}
export default Buy