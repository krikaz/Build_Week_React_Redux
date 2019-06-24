import axios from 'axios';

export const REGISTERING_USER = 'REGISTERING_USER';
export const REGISTERING_USER_SUCCESS = 'REGISTERING_USER_SUCCESS';
export const REGISTERING_USER_FAILURE = 'REGISTERING_USER_FAILURE';

export const registerUser = () => {
	return function(dispatch) {
		dispatch({ type: REGISTERING_USER });
		axios
			.post('https://lambdafit.herokuapp.com/auth/register/')
			.then(res => {
				dispatch({ type: REGISTERING_USER_SUCCESS, payload: res.data.token });
			})
			.catch(error => {
				dispatch({ type: REGISTERING_USER_FAILURE, payload: error.message });
			});
	};
};
