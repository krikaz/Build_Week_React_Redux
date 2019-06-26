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
	background-color: lightsalmon;
	width: 50%;
	padding: 1rem;
	margin: 1rem;
`;

export default function ExerciseForm(props) {
	console.log('token', props.token);
	console.log('id', props.id);
	// console.log('st', "43");
	// console.log("int", 43);

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
				<input type="text" ref={nameRef} />
			</label>
			<label>
				body region :
				<input type="text" ref={bodyRegionRef} />
			</label>
			<label>
				amount lifted :
				<input type="text" ref={amountLiftedRef} />
			</label>
			<label>
				reps :
				<input type="text" ref={repsRef} />
			</label>
			<label>
				sets :
				<input type="text" ref={setsRef} />
			</label>
			<label>
				date :
				<input type="text" ref={dateRef} />
			</label>

			<button onClick={onCreateNewExercise}>Create Exercise</button>
		</FormContainer>
	);
}
