import axios from 'axios';

export const REGISTERING_USER = 'REGISTERING_USER';
export const REGISTERING_USER_SUCCESS = 'REGISTERING_USER_SUCCESS';
export const REGISTERING_USER_FAILURE = 'REGISTERING_USER_FAILURE';

export const LOGGING_IN_USER = 'LOGGING_IN_USER';
export const LOGGING_IN_USER_SUCCESS = 'LOGGING_IN_USER_SUCCESS';
export const LOGGING_IN_USER_FAILURE = 'LOGGING_IN_USER_FAILURE';

export const registerUser = ({ username, password }) => {
	const newUser = { username: username, password: password };
	return function(dispatch) {
		dispatch({ type: REGISTERING_USER });
		console.log('registering user');
		axios
			.post('https://lambdafit.herokuapp.com/auth/register/', newUser)
			.then(res => {
				dispatch({ type: REGISTERING_USER_SUCCESS, payload: res.data.token });
				window.localStorage.setItem('token', res.data.token);
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

export const loggingInUser = ({ username, password }) => {
	const existingUser = { username: username, password: password };
	return function(dispatch) {
		dispatch({ type: LOGGING_IN_USER });
		console.log('logging in user');
		axios
			.post('https://lambdafit.herokuapp.com/auth/login/', existingUser)
			.then(res => {
				dispatch({
					type: LOGGING_IN_USER_SUCCESS,
					payload: {
						token: res.data.token,
						message: res.data.message,
						id: res.data.id,
					},
				});
        window.localStorage.setItem('user', JSON.stringify(res.data));
				console.log('succces');
				console.log(res.data.token);
				console.log(res.data.message);
				window.location = '/';
			})
			.catch(error => {
				dispatch({ type: LOGGING_IN_USER_FAILURE, payload: error.message });
				console.log('failure');
				console.log(error.message);
			});
	};
};
