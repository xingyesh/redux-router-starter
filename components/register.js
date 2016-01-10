import React, { Component, PropTypes } from 'react'
import { pushPath } from 'redux-simple-router'
import {Form, Input, Button} from 'amazeui-react'

function updateInsurances(text) {
	return {type: 'UPDATE_INSURANCES', text};
}

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email:'',
			username:'',
			password:'',
			repassword:''
		}
	}
  	validateEmail() {
	    var length = this.state.email.length;
	    if (length < 20 && length > 4 || length == 0) {
	      return 'success';
	    } else {
	      return 'error';
	    }
  	}
  	validateUsername() {
	    var length = this.state.username.length;
	    if (length < 10 && length > 3 || length == 0) {
	      return 'success';
	    } else {
	      return 'error';
	    }
  	}
  	validatePassword() {
	    var length = this.state.password.length;
	    if (length < 10 && length > 3 || length == 0) {
	      return 'success';
	    } else {
	      return 'error';
	    }
  	}
  	validateRepassword() {
	    const length = this.state.repassword.length;
	    const repassword = this.state.repassword;
	    if (repassword.length < 10 && repassword.length > 3 && repassword == this.state.password|| repassword.length == 0) {
	      return 'success';
	    } else {
	      return 'error';
	    }
  	}
  	handleChange(event) {
	    this.setState({
			email: this.refs.email.getValue().trim(),
	      	username: this.refs.username.getValue().trim(),
	      	password: this.refs.password.getValue().trim(),
	      	repassword: this.refs.repassword.getValue().trim(),
	    });
  	}
 //  	shouldComponentUpdate(nextProps, nextState) {
	// 	return this.state.username !== nextState.username || this.state.password !== nextState.password;
	// }
  	savedUser(){
		// console.log(this.props.actions(['aaa', 'ccc', 'ddd']));
		if(typeof(Storage) !== "undefined") {
			console.log('support session storage');
			// sessionStorage.username = this.state.username;
			sessionStorage.email = this.state.email;
			this.props.dispatch(pushPath('/'))
			//then rediret to index page.
		} else {
			console.log('unsupport storage, will user cookie');
		}

	}
 	render(){
		return(
			<div><h2>Register</h2>
				  <Form style={{width:'30%',margin:'30px'}}>
				    {/*
				    <Input placeholder="email" type='email' validation="success" hasFeedback />
				    <Input placeholder="username" label="验证警告" validation="warning" hasFeedback />
				    <Input placeholder="password" label="验证失败" validation="error" hasFeedback />
				    */}
				    <Input value={this.state.email}
					        placeholder='email'
					        validation={this.validateEmail()}
					        hasFeedback
					        ref='email'
					        type='email'
					        onChange={this.handleChange.bind(this)} />
			         <Input value={this.state.value}
					        placeholder='username'
					        validation={this.validateUsername()}
					        hasFeedback
					        ref='username'
					        onChange={this.handleChange.bind(this)} />
			         <Input value={this.state.value}
					        placeholder='password'
					        validation={this.validatePassword()}
					        hasFeedback
					        ref='password'
					        type='password'
					        onChange={this.handleChange.bind(this)} />
			         <Input value={this.state.value}
					        placeholder='repassword'
					        validation={this.validateRepassword()}
					        hasFeedback
					        ref='repassword'
					        type='password'
					        onChange={this.handleChange.bind(this)} />
				    <Button amStyle="primary" onClick={this.savedUser.bind(this)}>Regist</Button>
				  </Form>
			</div>
		)
	}
}

export default Register;

