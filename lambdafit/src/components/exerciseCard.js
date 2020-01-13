import React from 'react';
import styled from 'styled-components';

// import { Route, Link } from 'react-router-dom';
// import UpdateExercise from './updateExercise';
// import { useEffect } from 'react';

const SingleExercise = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	padding: 1rem;
	margin: 1rem;
	width: auto;
	background-color: rgb(255, 183, 82, 0.9);
	color: rgb(3, 84, 16);
`;

const StyledButton = styled.button`
	width: auto;
	margin-top: 1rem;
`;

export default function ExerciseCard({props, ex }) {

  // useEffect(() => {
  //   console.log('ex', ex);
  // }, []);

	const onDeleteExercise = id => {
		props.deleteExercise(id, props.token);
	};

	return (
		<SingleExercise >
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
}
