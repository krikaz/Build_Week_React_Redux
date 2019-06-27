import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: auto;
	background-color: rgb(255, 183, 82, 0.9);
	color: rgb(3, 84, 16);
`;

const StyledInput = styled.input`
	font-size: 1.5rem;
	margin: 0.5rem;
`;

const StyledButton = styled.button`
	font-size: 1.5rem;
	margin: 0.5rem;
`;

const ageRef = React.createRef();
const weightRef = React.createRef();
const heightRef = React.createRef();
const genderRef = React.createRef();
const emailRef = React.createRef();

export default function UserInfo(props) {
	useEffect(() => {
		props.checkUserInfo(props.id);
	}, []);

	const onUpdateUserInfo = () => {
		const existingUser = {
			age: ageRef.current.value,
			weight: weightRef.current.value,
			height: heightRef.current.value,
			gender: genderRef.current.value,
			email: emailRef.current.value,
		};
		props.updateUserInfo(props.id, existingUser);
	};

	if (props.user[0]) {
		return (
			<StyledContainer>
				<label>
					my ID : <span>{props.id}</span>
				</label>
				<label>
					my name : <span>{props.user[0].username}</span>
				</label>
				<label>
					my age :
					<StyledInput
						type="number"
						ref={ageRef}
						placeholder={props.user[0].age}
					/>
				</label>
				<label>
					my weight :
					<StyledInput
						type="number"
						ref={weightRef}
						placeholder={props.user[0].weight}
					/>
				</label>
				<label>
					my height :
					<StyledInput
						type="number"
						ref={heightRef}
						placeholder={props.user[0].height}
					/>
				</label>
				<label>
					my gender :
					<StyledInput
						type="text"
						ref={genderRef}
						placeholder={props.user[0].gender}
					/>
				</label>
				<label>
					my email :
					<StyledInput
						type="text"
						ref={emailRef}
						placeholder={props.user[0].email}
					/>
				</label>

				<StyledButton onClick={onUpdateUserInfo}>Update My Info</StyledButton>
			</StyledContainer>
		);
	} else {
		return null;
	}
}
