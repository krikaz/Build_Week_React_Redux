import React from 'react';
import UserInfo from './userInfo';

export default class User extends React.Component {
	// constructor({ props, id }) {
	// 	super({ props, id });
	// 	// console.log(this.props);
	// }

	LogginProps() {
		console.log(this.props.props.user[0]);
		// console.log(this.props.props.user[0]['age']);
	}

	checkUserInfo() {
		this.props.props.checkUserInfo(this.props.id);
		// console.log(test);
	}

	render() {
		return (
			<div>
				<button onClick={this.checkUserInfo.bind(this)}>Check my info</button>

				<button onClick={this.LogginProps.bind(this)}>Log my info</button>

				<UserInfo props={this.props.props} />
			</div>
		);
	}
}
