import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const ageRef = React.createRef();
const weightRef = React.createRef();
const heightRef = React.createRef();
const genderRef = React.createRef();
const emailRef = React.createRef();

export default function UserInfo(props) {
	// console.log(props);

	// const onCheckUserInfo = () => {
	// 	props.checkUserInfo(props.id);
	// };

	useEffect(() => {
		props.checkUserInfo(props.id);
	}, []);

	const onUpdateUserInfo = () => {
		const existingUser = {
			// id: props.id,
			// username: nameRef.current.value,
			age: ageRef.current.value,
			weight: weightRef.current.value,
			height: heightRef.current.value,
			gender: genderRef.current.value,
			email: emailRef.current.value,
		};
		console.log(existingUser);
		props.updateUserInfo(props.id, existingUser);
		// window.location.reload();
	};

	// if (localStorage.getItem('user')) {
	// 	const retrievedObject = JSON.parse(localStorage.getItem('user'));
	// 	if (props.id === null) {
	// 		props.updateId(retrievedObject.user_id);
	// 		props.updateToken(retrievedObject.token);
	// 		props.updateIsLoggedIn();
	// 		// console.log(retrievedObject.token);
	// 	}
	// }

	if (props.user[0]) {
		return (
			<Container>
				<label>
					my ID : <span>{props.id}</span>
				</label>
				<label>
					my name : <span>{props.user[0].username}</span>
				</label>
				<label>
					my age :
					<input type="number" ref={ageRef} placeholder={props.user[0].age} />
				</label>
				<label>
					my weight :
					<input
						type="number"
						ref={weightRef}
						placeholder={props.user[0].weight}
					/>
				</label>
				<label>
					my height :
					<input
						type="number"
						ref={heightRef}
						placeholder={props.user[0].height}
					/>
				</label>
				<label>
					my gender :
					<input
						type="text"
						ref={genderRef}
						placeholder={props.user[0].gender}
					/>
				</label>
				<label>
					my email :
					<input type="text" ref={emailRef} placeholder={props.user[0].email} />
				</label>

				<button onClick={onUpdateUserInfo}>Update My Info</button>
			</Container>
		);
	} else {
		// return <button onClick={onCheckUserInfo}>click</button>;
		return null;
	}
}
