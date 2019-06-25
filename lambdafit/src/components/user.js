import React from 'react';
import UserInfo from './userInfo';

export default class User extends React.Component {
	LogginProps() {
		console.log(this.props.user[0]);
	}

	checkUserInfo() {
		this.props.checkUserInfo(this.props.id);
	}

	render() {
		console.log(this.props);

		return (
			<div>
				<button onClick={this.checkUserInfo.bind(this)}>Check my info</button>

				<button onClick={this.LogginProps.bind(this)}>Log my info</button>

				<UserInfo user={this.props.user[0]} />
			</div>
		);
	}
}
