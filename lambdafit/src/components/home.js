import React from 'react';
import { Link } from 'react-router-dom';
// import User from './user';
import * as actions from '../actions';
import { connect } from 'react-redux';

function Home(props) {
	// console.log(props);
	if (localStorage.getItem('user')) {
		const retrievedObject = JSON.parse(localStorage.getItem('user'));
		// console.log(retrievedObject);
		console.log(retrievedObject.user_id);
		props.updateId(retrievedObject.user_id);
		console.log(props);

		return (
			<div>
				<p>{retrievedObject.message}</p>
				{/* <User {...this.props, id = retrievedObject.user_id } /> */}
			</div>
		);
	} else {
		return (
			<div>
				<p>
					New user? Please <Link to="/register">register</Link>
				</p>
				<p>
					Existing user? Please <Link to="/login">log in</Link>
				</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		registeringUser: state.registeringUser,
		loggingInUser: state.loggingInUser,
		checkingUserInfo: state.checkingUserInfo,
		updatingUserInfo: state.updatingUserInfo,
		token: state.token,
		error: state.error,
		message: state.message,
		user: state.user,
		id: state.id,
	};
}

export default connect(
	mapStateToProps,
	actions
)(Home);
