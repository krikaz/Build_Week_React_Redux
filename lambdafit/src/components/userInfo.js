import React from 'react';

const nameRef = React.createRef();
const ageRef = React.createRef();
const weightRef = React.createRef();
const heightRef = React.createRef();
const genderRef = React.createRef();
const emailRef = React.createRef();

export default function UserInfo({ props }) {
	console.log(props.user[0]);

	const updateUserInfo = () => {
		const existingUser = {
      id: props.user[0].id,
			username: nameRef.current.value,
			age: ageRef.current.value,
			weight: weightRef.current.value,
			height: heightRef.current.value,
			gender: genderRef.current.value,
			email: emailRef.current.value,
    };
    console.log(props.user[0].id);
		props.updateUserInfo(existingUser);
	};

	if (props.user[0]) {
		return (
			<div>
				<label>
					my ID
					<span>{props.user[0].id}</span>
				</label>
				<label>
					my name
					<input type="text" ref={nameRef} value={props.user[0].username} />
				</label>
				{/* <label>
					my password
					<span>props.user[0].password}</span>
				</label> */}
				<label>
					my age
					<input type="number" ref={ageRef} value={props.user[0].age} />
				</label>
				<label>
					my weight
					<input type="number" ref={weightRef} value={props.user[0].weight} />
				</label>
				<label>
					my height
					<input type="number" ref={heightRef} value={props.user[0].height} />
				</label>
				<label>
					my gender
					<input type="text" ref={genderRef} value={props.user[0].gender} />
				</label>
				<label>
					my email
					<input type="text" ref={emailRef} value={props.user[0].email} />
				</label>

				<button onClick={updateUserInfo}>Update My Info</button>
			</div>
		);
	} else {
		return null;
	}

	// return null;
}
