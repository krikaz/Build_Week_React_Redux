import React from 'react';

export default function Login(props) {
	const nameRef = React.createRef();
	const passRef = React.createRef();

	const onLogIn = () => {
		const existingUser = {
			username: nameRef.current.value,
			password: passRef.current.value,
		};
		props.loggingInUser(existingUser);
	};

	return (
		<div>
			<div>
				<input type="text" placeholder="username" ref={nameRef} />
			</div>

			<div>
				<input type="password" placeholder="password" ref={passRef} />
			</div>

			<button type="submit" onClick={onLogIn}>
				Log In
			</button>
		</div>
	);
}
