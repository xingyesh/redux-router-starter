import React, { Component, PropTypes } from 'react'
import { pushPath } from 'redux-simple-router'
import {Form, Input, Button} from 'amazeui-react'

function updateInsurances(text) {
	return {type: 'UPDATE_INSURANCES', text};
}

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email:'',
			password:''
		}
	}
  	validateEmail() {
	    var length = this.state.email.length;
	    if (length < 10 && length > 4 || length == 0) {
	      return 'success';
	    } else {
	      return 'error';
	    }
  	}
  	validatePassword() {
	    var length = this.state.password.length;
	    if (length < 10 && length > 5 || length == 0) {
	      return 'success';
	    } else {
	      return 'error';
	    }
  	}
  	handleChange(event) {
	    this.setState({
	      email: this.refs.email.getValue().trim(),
	      password: this.refs.password.getValue().trim(),
	    });
  	}
  	shouldComponentUpdate(nextProps, nextState) {
		return this.state.email !== nextState.email || this.state.password !== nextState.password;
	}
  	submitUser(){
		// console.log(this.props.actions(['aaa', 'ccc', 'ddd']));
		console.log(this.state.username)
		console.log(this.state.password)
		if(typeof(Storage) !== "undefined") {
			console.log('support session storage');
			sessionStorage.email = this.state.email;
			// sessionStorage.password = this.state.password;
			this.props.dispatch(pushPath('/'))
			//then rediret to index page.
		} else {
			console.log('unsupport storage, will user cookie');
		}

	}
 	render(){
		return(
			<div><h2>Login</h2>
				  <Form style={{width:'30%',margin:'30px'}}>
				    <Input value={this.state.email}
					        placeholder="email"
					        validation={this.validateEmail()}
					        hasFeedback
					        ref="email"
					        onChange={this.handleChange.bind(this)} />
			         <Input value={this.state.password}
					        placeholder="password"
					        validation={this.validatePassword()}
					        hasFeedback
					        ref="password"
					        onChange={this.handleChange.bind(this)} />
				    <Button amStyle="primary" onClick={this.submitUser.bind(this)}>Login</Button>
				  </Form>
			</div>
		)
	}
}

export default Login;

