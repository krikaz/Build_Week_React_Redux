import React from 'react';
import UserInfo from './userInfo';

export default function User(props) {
	const checkUserInfo = () => {
		props.checkUserInfo(props.id);
	};

	return (
		<div>
			<button onClick={checkUserInfo}>Check my info</button>

			<UserInfo {...props} />
		</div>
	);
}
