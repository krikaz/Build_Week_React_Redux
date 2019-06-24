import React from 'react';

export default function Home() {
	let retrievedObject = { message: '' };

	if (localStorage.getItem('user')) {
		retrievedObject = JSON.parse(localStorage.getItem('user'));
		return (
			<div>
				<p>{retrievedObject.message}</p>
			</div>
		);
	} else {
		return (
			<div>
				<p>New user? Please register</p>
				<p>Existing user? Please log in</p>
			</div>
		);
	}
}
