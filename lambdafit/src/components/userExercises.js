import React from 'react';
import styled from 'styled-components';
import ExerciseForm from './exerciseForm';

const SingleExercise = styled.div`
	display: flex;
	flex-direction: column;
`;

const ContainerExercises = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;

export default function Exercises(props) {
	const onFetchUserExercises = () => {
		props.fetchUserExercises(props.id);
		// console.log(props.exercises);
	};

	if (props.exercises[0]) {
		// console.log(props.exercises);
		return (
			<div>
				<ContainerExercises>
					{props.exercises.map(ex => {
						return (
							<SingleExercise key={ex.id}>
								<p>name = {ex.name}</p>
								<p>body region worked = {ex.body_region}</p>
								<p>amount lifted = {ex.amount_lifted}</p>
								<p>reps = {ex.reps}</p>
								<p>sets = {ex.sets}</p>
								<p>date = {ex.date}</p>
							</SingleExercise>
						);
					})}
				</ContainerExercises>

				<ExerciseForm {...props} />
			</div>
		);
	} else {
		// console.log(props.exercises[0]);

		return (
			<div>
				<button onClick={onFetchUserExercises}>fetch</button>
			</div>
		);
	}
}
