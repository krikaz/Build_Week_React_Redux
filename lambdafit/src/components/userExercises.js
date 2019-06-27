import React, { useEffect } from 'react';
import styled from 'styled-components';
import ExerciseForm from './exerciseForm';
// import { Route, Link } from 'react-router-dom';
// import UpdateExercise from './updateExercise';

const SingleExercise = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	/* align-items: center; */

	padding: 1rem;
	margin: 1rem;
	width: auto;
	background-color: rgb(255, 183, 82, 0.9);
	color: rgb(3, 84, 16);
`;

const ContainerExercises = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;

const StyledButton = styled.button`
	width: auto;
	margin-top: 1rem;
`;

export default function Exercises(props) {
	useEffect(() => {
		props.fetchUserExercises(props.id);
	}, []);

	const onDeleteExercise = id => {
		props.deleteExercise(id, props.token);
	};

	if (props.exercises[0]) {
		return (
			<div>
				<ContainerExercises>
					{props.exercises.map(ex => {
						return (
							<SingleExercise key={ex.id}>
								{/* <Link to="/myexercises/update">Update</Link> */}

								<h3>{ex.name}</h3>
								<span>worked on {ex.body_region}</span>
								<span>weight lifted = {ex.amount_lifted}</span>
								<span>{ex.reps} reps</span>
								<span>{ex.sets} sets</span>
								<span>{ex.date}</span>

								<StyledButton onClick={() => onDeleteExercise(ex.id)}>
									Delete
								</StyledButton>

								{/* <Route
									path="/myexercises/update/"
									render={() => <UpdateExercise {...props} />}
								/> */}
							</SingleExercise>
						);
					})}
				</ContainerExercises>
				<ExerciseForm {...props} />
			</div>
		);
	} else {
		return (
			<div>
				<ExerciseForm {...props} />
			</div>
		);
	}
}
