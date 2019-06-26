import * as types from '../actions';

const initialState = {
	registeringUser: false,
	loggingInUser: false,
	checkingUserInfo: false,
	updatingUserInfo: false,
	fetchingUserExercises: false,
	creatingNewExercise: false,
	deletingExercise: false,
	token: null,
	error: null,
	id: null,
	message: '',
	user: [],
	exercises: [],
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
		case types.UPDATING_USER_INFO:
			return {
				...state,
				updatingUserInfo: true,
			};
		case types.UPDATING_USER_INFO_SUCCESS:
			return {
				...state,
				updatingUserInfo: false,
				user: [...state.user, action.payload],
			};
		case types.UPDATING_USER_INFO_FAILURE:
			return {
				...state,
				updatingUserInfo: false,
				error: action.payload,
			};
		case types.UPDATE_ID:
			return {
				...state,
				id: action.payload,
			};
		case types.UPDATE_TOKEN:
			return {
				...state,
				token: action.payload,
			};
		case types.FETCHING_USER_EXERCISES:
			return {
				...state,
				fetchingUserExercises: true,
			};
		case types.FETCHING_USER_EXERCISES_SUCCESS:
			return {
				...state,
				fetchingUserExercises: false,
				// exercises: [...state.exercises, action.payload],
				exercises: action.payload,
			};
		case types.FETCHING_USER_EXERCISES_FAILURE:
			return {
				...state,
				fetchingUserExercises: false,
				error: action.payload,
			};
		case types.CREATING_NEW_EXERCISE:
			return {
				...state,
				creatingNewExercise: true,
			};
		case types.CREATING_NEW_EXERCISE_SUCCESS:
			return {
				...state,
				creatingNewExercise: false,
				exercises: [...state.exercises, action.payload],
			};
		case types.CREATING_NEW_EXERCISE_FAILURE:
			return {
				...state,
				creatingNewExercise: false,
				error: action.payload,
			};
		case types.DELETING_EXERCISE:
			return {
				...state,
				deletingExercise: true,
			};
		case types.DELETING_EXERCISE_SUCCESS:
			return {
				...state,
				deletingExercise: false,
				exercises: [...state.exercises],
			};
		case types.DELETING_EXERCISE_FAILURE:
			return {
				...state,
				deletingExercise: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
