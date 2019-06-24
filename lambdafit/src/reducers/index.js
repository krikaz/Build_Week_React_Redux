import * as types from '../actions';

const initialState = {
	exercises: [],
	registeringUser: false,
	token: null,
	error: null,
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
		default:
			return state;
	}
};
