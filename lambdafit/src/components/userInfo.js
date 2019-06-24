import React from 'react';

export default function UserInfo({ props }) {
	console.log(props.user[0]);
	if (props.user[0]) {
		return (
			<div>
				<p>{props.user[0].username}</p>
				<p>{props.user[0].id}</p>
				<p>{props.user[0].age}</p>
				<p>{props.user[0].height}</p>
			</div>
		);
	} else {
		return null;
	}

	// return null;
}
