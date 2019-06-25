import React from 'react';

export default function Exercises(props) {
	const onFetchUserExercises = () => {
		props.fetchUserExercises(props.id);
		// console.log(props.exercises);
	};

	if (props.exercises[0]) {
		console.log(props.exercises[0]);
		return (
			<div>
				<p>{props.exercises[0].name}</p>
				{props.exercises[0].id}
			</div>
		);
	} else {
		console.log(props.exercises[0]);

		return (
			<div>
				<button onClick={onFetchUserExercises}>fetch</button>
				{/* {props.exercises.map(ex => {
							return <div>{ex}</div>;
						})} */}
			</div>
		);
	}
}
