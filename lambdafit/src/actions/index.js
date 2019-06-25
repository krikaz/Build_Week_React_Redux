import axios from 'axios';

export const REGISTERING_USER = 'REGISTERING_USER';
export const REGISTERING_USER_SUCCESS = 'REGISTERING_USER_SUCCESS';
export const REGISTERING_USER_FAILURE = 'REGISTERING_USER_FAILURE';

export const LOGGING_IN_USER = 'LOGGING_IN_USER';
export const LOGGING_IN_USER_SUCCESS = 'LOGGING_IN_USER_SUCCESS';
export const LOGGING_IN_USER_FAILURE = 'LOGGING_IN_USER_FAILURE';

export const CHECKING_USER_INFO = 'CHECKING_USER_INFO';
export const CHECKING_USER_INFO_SUCCESS = 'CHECKING_USER_INFO_SUCCESS';
export const CHECKING_USER_INFO_FAILURE = 'CHECKING_USER_INFO_FAILURE';

export const UPDATING_USER_INFO = 'UPDATING_USER_INFO';
export const UPDATING_USER_INFO_SUCCESS = 'UPDATING_USER_INFO_SUCCESS';
export const UPDATING_USER_INFO_FAILURE = 'UPDATING_USER_INFO_FAILURE';

export const UPDATE_ID = 'UPDATE_ID';

export const updateId = id => {
	// return function(dispatch) {
	// 	dispatch({ type: UPDATE_ID, payload: id });
	// };
	return { type: UPDATE_ID, payload: id };
};

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

export const checkUserInfo = id => {
	return function(dispatch) {
		dispatch({ type: CHECKING_USER_INFO });
		console.log('checking user');
		axios
			.get('https://lambdafit.herokuapp.com/user/' + id)
			.then(res => {
				dispatch({ type: CHECKING_USER_INFO_SUCCESS, payload: res.data });
				console.log(res.data);
				console.log('succces');
			})
			.catch(error => {
				dispatch({ type: CHECKING_USER_INFO_FAILURE, payload: error.message });
				console.log('failure');
				console.log(error.message);
			});
	};
};

export const updateUserInfo = ({ existingUser }) => {
	return function(dispatch) {
		dispatch({ type: UPDATING_USER_INFO });
		console.log('updating user');
		console.log(existingUser);
		axios
			.put(
				'https://lambdafit.herokuapp.com/user/' + existingUser.id,
				existingUser
			)
			.then(res => {
				dispatch({ type: UPDATING_USER_INFO_SUCCESS, payload: res.data });
				console.log(res.data);
				console.log('succces');
			})
			.catch(error => {
				dispatch({ type: UPDATING_USER_INFO_FAILURE, payload: error.message });
				console.log('failure');
				console.log(error.message);
			});
	};
};
