import * as types from '../actions';

const initialState = {
	exercises: [],
	registeringUser: false,
	loggingInUser: false,
	checkingUserInfo: false,
	token: null,
	error: null,
	id: null,
	message: '',
	test: 'test',
	user: [],
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.REGISTERING_USER:
			return {
				...state,
				registeringUser: true,
			};
		case types.REGISTERING_USER_SUCCESS:
			return {
				...state,
				registeringUser: false,
				token: action.payload,
			};
		case types.REGISTERING_USER_FAILURE:
			return {
				...state,
				registeringUser: false,
				error: action.payload,
			};
		case types.LOGGING_IN_USER:
			return {
				...state,
				loggingInUser: true,
			};
		case types.LOGGING_IN_USER_SUCCESS:
			return {
				...state,
				loggingInUser: false,
				token: action.payload.token,
				message: action.payload.message,
				id: action.payload.id,
			};
		case types.LOGGING_IN_USER_FAILURE:
			return {
				...state,
				loggingInUser: false,
				error: action.payload,
			};
		case types.CHECKING_USER_INFO:
			return {
				...state,
				checkingUserInfo: true,
			};
		case types.CHECKING_USER_INFO_SUCCESS:
			return {
				...state,
				checkingUserInfo: false,
				user: [...state.user, action.payload],
			};
		case types.CHECKING_USER_INFO_FAILURE:
			return {
				...state,
				checkingUserInfo: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
