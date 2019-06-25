import React from 'react';
import UserInfo from './userInfo';

export default function User(props) {
	const LogginProps = () => {
		console.log(props.user[0]);
	};

	const checkUserInfo = () => {
		props.checkUserInfo(props.id);
	};

	return (
		<div>
			<button onClick={checkUserInfo}>Check my info</button>

			<button onClick={LogginProps}>Log my info</button>

			<UserInfo {...props} />
		</div>
	);
}
