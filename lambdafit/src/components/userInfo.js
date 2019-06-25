import React from 'react';

export default function UserInfo({ user }) {
	const nameRef = React.createRef();
	const ageRef = React.createRef();
	const weightRef = React.createRef();
	const heightRef = React.createRef();
	const genderRef = React.createRef();
	const emailRef = React.createRef();

	const updateUserInfo = () => {
		const existingUser = {
			id: user.id,
			username: nameRef.current.value,
			age: ageRef.current.value,
			weight: weightRef.current.value,
			height: heightRef.current.value,
			gender: genderRef.current.value,
			email: emailRef.current.value,
		};
		user.updateUserInfo(existingUser);
	};

	if (user) {
		return (
			<div>
				<label>
					my ID
					<span>{user.id}</span>
				</label>
				<label>
					my name
					<input type="text" ref={nameRef} value={user.username} />
				</label>
				<label>
					my age
					<input type="number" ref={ageRef} value={user.age} />
				</label>
				<label>
					my weight
					<input type="number" ref={weightRef} value={user.weight} />
				</label>
				<label>
					my height
					<input type="number" ref={heightRef} value={user.height} />
				</label>
				<label>
					my gender
					<input type="text" ref={genderRef} value={user.gender} />
				</label>
				<label>
					my email
					<input type="text" ref={emailRef} value={user.email} />
				</label>

				<button onClick={updateUserInfo}>Update My Info</button>
			</div>
		);
	} else {
		return null;
	}
}
