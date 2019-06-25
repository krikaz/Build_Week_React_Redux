import React from 'react';
import { Link } from 'react-router-dom';
import User from './user';

export default function Home(props) {
	if (localStorage.getItem('user')) {
		const retrievedObject = JSON.parse(localStorage.getItem('user'));
		if (props.id === null) {
			props.updateId(retrievedObject.user_id);
		}

		return (
			<div>
				<p>{retrievedObject.message}</p>
				<User {...props} />
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
