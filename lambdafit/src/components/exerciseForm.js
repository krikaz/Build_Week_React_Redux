import React from 'react';
import styled from 'styled-components';

const nameRef = React.createRef();
const bodyRegionRef = React.createRef();
const amountLiftedRef = React.createRef();
const repsRef = React.createRef();
const setsRef = React.createRef();
const dateRef = React.createRef();

const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: rgb(255, 183, 82, 0.9);
	color: rgb(3, 84, 16);

	width: 50%;
	padding: 1rem;
	margin: 1rem;

	label {
		padding: 0.2rem;
	}
`;

const StyledInput = styled.input`
	font-size: 1rem;
`;

const StyledButton = styled.button`
	width: auto;
	margin-top: 1rem;
`;



export default function ExerciseForm(props) {

	const onCreateNewExercise = () => {
		const newExercise = {
			user_id: props.id,
			name: nameRef.current.value,
			body_region: bodyRegionRef.current.value,
			amount_lifted: amountLiftedRef.current.value,
			reps: repsRef.current.value,
			sets: setsRef.current.value,
			date: dateRef.current.value,
		};

		props.createNewExercise(props.token, newExercise);
	};

	return (
		<FormContainer>
			<h3>Create New Exercise</h3>
			<label>
				name :
				<StyledInput type="text" ref={nameRef} />
			</label>
			<label>
				body region :
				<StyledInput type="text" ref={bodyRegionRef} />
			</label>
			<label>
				amount lifted :
				<StyledInput type="text" ref={amountLiftedRef} />
			</label>
			<label>
				reps :
				<StyledInput type="text" ref={repsRef} />
			</label>
			<label>
				sets :
				<StyledInput type="text" ref={setsRef} />
			</label>
			<label>
				date :
				<StyledInput type="text" ref={dateRef} />
			</label>

			<StyledButton onClick={onCreateNewExercise}>Create Exercise</StyledButton>
		</FormContainer>
	);
}
