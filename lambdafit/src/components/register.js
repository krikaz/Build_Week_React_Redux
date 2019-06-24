import React from 'react';

export default function Register() {
	return (
		<div>
			<div>
				<label>Username:</label>
				<input type="text" name="username" />
			</div>

			<div>
				<label>Password:</label>
				<input type="password" name="password" required />
			</div>

			<input type="submit" value="Sign in" />
		</div>
	);
}
