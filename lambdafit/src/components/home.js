import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	if (localStorage.getItem('user')) {
		const retrievedObject = JSON.parse(localStorage.getItem('user'));
		return (
			<div>
				<p>{retrievedObject.message}</p>
			</div>
		);
	} else {
		return (
			<div>
				<p>
					New user? Please <Link to="/register">register</Link>
				</p>
				<p>
					Existing user? Please <Link to="/login">log in</Link>
				</p>
			</div>
		);
	}
}
