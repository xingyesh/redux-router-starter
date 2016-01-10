import React from 'react'
import {Link} from 'react-router'

class Header extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		let user = sessionStorage.email ? [<li key='user-signout'><Link to="/user/signout">signout</Link></li>,<li key='user-info'><Link to="/user/info">{sessionStorage.email}</Link></li>] :  [<li key='user-login'><Link to="/user/login">login</Link></li> ,<li key='user-register'><Link to="/user/register">register</Link></li>]
		return (
			<div>
				<ul className='header'>
					<li><Link to="/">首页</Link></li>
		          	<li><Link to="/buy">1111</Link></li>
		          	<li><Link to="/actives">2222</Link></li>
		          	{user}
		        </ul>
		        {this.props.children}
			</div>
		)
	}
}

export default Header