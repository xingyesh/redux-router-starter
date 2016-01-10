import React, { Component, PropTypes } from 'react'
import { pushPath } from 'redux-simple-router'
import {Form, Input, Button} from 'amazeui-react'

class UserInfo extends React.Component {
	constructor(props) {
		super(props);
	}
 	render(){
		return(
			<div><h2>test</h2>
				<div>{sessionStorage.email}</div>
			</div>
		)
	}
}

export default UserInfo;

