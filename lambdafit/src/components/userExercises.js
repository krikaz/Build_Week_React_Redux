import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export default function Exercises(props) {
	const onFetchUserExercises = () => {
		props.fetchUserExercises(props.id);
		// console.log(props.exercises);
	};

	if (props.exercises[0]) {
		console.log(props.exercises);
		return (
			<div>
				{props.exercises.map(ex => {
					return (
						<Container key={ex.id}>
							<p>name = {ex.name}</p>
							<p>body region worked = {ex.body_region}</p>
							<p>amount lifted = {ex.amount_lifted}</p>
							<p>reps = {ex.reps}</p>
							<p>sets = {ex.sets}</p>
							<p>date = {ex.date}</p>
						</Container>
					);
				})}
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
