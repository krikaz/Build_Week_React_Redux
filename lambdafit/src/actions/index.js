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
export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const UPDATE_ISLOGGEDIN = 'UPDATE_ISLOGGEDIN';

export const FETCHING_USER_EXERCISES = 'FETCHING_USER_EXERCISES';
export const FETCHING_USER_EXERCISES_SUCCESS =
	'FETCHING_USER_EXERCISES_SUCCESS';
export const FETCHING_USER_EXERCISES_FAILURE =
	'FETCHING_USER_EXERCISES_FAILURE';

export const CREATING_NEW_EXERCISE = 'CREATING_NEW_EXERCISE';
export const CREATING_NEW_EXERCISE_SUCCESS = 'CREATING_NEW_EXERCISE_SUCCESS';
export const CREATING_NEW_EXERCISE_FAILURE = 'CREATING_NEW_EXERCISE_FAILURE';

export const DELETING_EXERCISE = 'DELETING_EXERCISE';
export const DELETING_EXERCISE_SUCCESS = 'DELETING_EXERCISE_SUCCESS';
export const DELETING_EXERCISE_FAILURE = 'DELETING_EXERCISE_FAILURE';

export const deleteExercise = (id, token) => {
	return function(dispatch) {
		dispatch({ type: DELETING_EXERCISE });
		console.log('deleting exercise');
		// console.log(exercise);
		axios
			.delete('https://lambdafit.herokuapp.com/exercises/' + id, {
				headers: { Authorization: token },
			})
			.then(res => {
				dispatch({ type: DELETING_EXERCISE_SUCCESS });
				// console.log(res.data);
				console.log('succces');
				window.location = '/myexercises';
			})
			.catch(error => {
				dispatch({
					type: DELETING_EXERCISE_FAILURE,
					payload: error.message,
				});
				console.log('failure');
				console.log(error.message);
			});
	};
};

export const createNewExercise = (token, exercise) => {
	return function(dispatch) {
		dispatch({ type: CREATING_NEW_EXERCISE });
		console.log('creating new exercise');
		console.log('exercise', exercise);
		axios
			.post('https://lambdafit.herokuapp.com/exercises/', exercise, {
				headers: { Authorization: token },
			})
			.then(res => {
				dispatch({ type: CREATING_NEW_EXERCISE_SUCCESS, payload: res.data });
				// console.log(res.data);
				console.log('succces');
				window.location = '/myexercises';
			})
			.catch(error => {
				dispatch({
					type: CREATING_NEW_EXERCISE_FAILURE,
					payload: error.message,
				});
				console.log('failure');
				console.log(error.message);
			});
	};
};

export const fetchUserExercises = id => {
	return function(dispatch) {
		dispatch({ type: FETCHING_USER_EXERCISES });
		console.log('fetching user exercises');
		axios
			.get('https://lambdafit.herokuapp.com/user/' + id + '/exercises')
			.then(res => {
				dispatch({ type: FETCHING_USER_EXERCISES_SUCCESS, payload: res.data });
				console.log('succces');
				// console.log(res.data);
				// window.location = '/myexercises';
			})
			.catch(error => {
				dispatch({
					type: FETCHING_USER_EXERCISES_SUCCESS,
					payload: error.message,
				});
				console.log('failure');
				console.log(error.message);
			});
	};
};

export const updateId = id => {
	return { type: UPDATE_ID, payload: id };
};

export const updateToken = token => {
	return { type: UPDATE_TOKEN, payload: token };
};

export const updateIsLoggedIn = () => {
	return { type: UPDATE_ISLOGGEDIN };
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
				// console.log(res.data.token);
				window.location = '/login';
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
				// console.log(res.data.token);
				// console.log(res.data.message);
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
				// console.log(res.data);
				console.log('succces');
			})
			.catch(error => {
				dispatch({ type: CHECKING_USER_INFO_FAILURE, payload: error.message });
				console.log('failure');
				console.log(error.message);
			});
	};
};

export const updateUserInfo = (id, existingUser) => {
	return function(dispatch) {
		dispatch({ type: UPDATING_USER_INFO });
		console.log('updating user');
		// console.log(existingUser);
		axios
			.put('https://lambdafit.herokuapp.com/user/' + id, existingUser)
			.then(res => {
				dispatch({ type: UPDATING_USER_INFO_SUCCESS, payload: res.data });
				// console.log(res.data);
				console.log('succces');
				window.location = '/myinfo';
			})
			.catch(error => {
				dispatch({ type: UPDATING_USER_INFO_FAILURE, payload: error.message });
				console.log('failure');
				console.log(error.message);
			});
	};
};
