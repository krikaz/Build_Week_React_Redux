import React, { useEffect } from 'react';
import styled from 'styled-components';
import ExerciseForm from './exerciseForm';
import ExerciseCard from './exerciseCard';

const ContainerExercises = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;

export default function Exercises(props) {
	useEffect(() => {
		props.fetchUserExercises(props.id);
	}, []);

	if (props.exercises[0]) {
		return (
			<div>
				<ContainerExercises>
					{props.exercises.map(ex => {
						return <ExerciseCard key={ex.id} props={props} ex={ex}/>;
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
