import axios from 'axios';

export const REGISTERING_USER = 'REGISTERING_USER';
export const REGISTERING_USER_SUCCESS = 'REGISTERING_USER_SUCCESS';
export const REGISTERING_USER_FAILURE = 'REGISTERING_USER_FAILURE';

export const registerUser = ({ username, password }) => {
	const newUser = { username: username, password: password };
	return function(dispatch) {
		dispatch({ type: REGISTERING_USER });
		console.log('registering user');
		axios
			.post('https://lambdafit.herokuapp.com/auth/register/', newUser)
			.then(res => {
				dispatch({ type: REGISTERING_USER_SUCCESS, payload: res.data.token });
				console.log('succces');
				console.log(res.data.token);
			})
			.catch(error => {
				dispatch({ type: REGISTERING_USER_FAILURE, payload: error.message });
				console.log('failure');
				console.log(error.message);
			});
	};
};
