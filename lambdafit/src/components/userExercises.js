import React, { useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import ExerciseForm from './exerciseForm';
import UpdateExercise from './updateExercise';

const SingleExercise = styled.div`
	display: flex;
	flex-direction: column;
	background-color: lightblue;
	padding: 1rem;
	margin: 1rem;
`;

const ContainerExercises = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;

const ContainerButton = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const StyledButton = styled.button`
	width: 10%;
`;

export default function Exercises(props) {
	// const onFetchUserExercises = () => {
	// 	props.fetchUserExercises(props.id);
	// 	console.log(props.exercises);
	// };

	useEffect(() => {
		props.fetchUserExercises(props.id);
	}, []);

	const onDeleteExercise = id => {
		props.deleteExercise(id, props.token);
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

	if (props.exercises[0]) {
		// console.log(props.exercises);
		return (
			<div>
				<ContainerExercises>
					{props.exercises.map(ex => {
						return (
							<SingleExercise key={ex.id}>
								<Link to="/myexercises/update">Update</Link>
								<ContainerButton>
									<StyledButton onClick={() => onDeleteExercise(ex.id)}>
										X
									</StyledButton>
								</ContainerButton>
								<p>name = {ex.name}</p>
								<p>body region worked = {ex.body_region}</p>
								<p>amount lifted = {ex.amount_lifted}</p>
								<p>reps = {ex.reps}</p>
								<p>sets = {ex.sets}</p>
								<p>date = {ex.date}</p>
								<Route
									path="/myexercises/update/"
									render={() => <UpdateExercise {...props} />}
								/>
							</SingleExercise>
						);
					})}
				</ContainerExercises>
				<ExerciseForm {...props} />
				{/* <UpdateExercise {...props} /> */}
			</div>
		);
	} else {
		// console.log(props.exercises[0]);

		return (
			<div>
				{/* <button onClick={onFetchUserExercises}>fetch</button> */}
				<ExerciseForm {...props} />
			</div>
		);
	}
}
