import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import * as actions from './actions';
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';
import UserInfo from './components/userInfo';
import UserExercises from './components/userExercises';
import styled from 'styled-components';

const Nav = styled.nav`
	display: flex;
	justify-content: space-around;
`;

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Nav>
					<Link to="/">Home</Link>

					<Link to="/register">Register</Link>

					<Link to="/login">Log in</Link>

					<Link to="/myinfo">My account</Link>

					<Link to="/myexercises">My exercises</Link>
				</Nav>

				<Route path="/" exact render={() => <Home {...this.props} />} />

				<Route path="/register/" render={() => <Register {...this.props} />} />
				<Route path="/login/" render={() => <Login {...this.props} />} />

				<Route path="/myinfo" render={() => <UserInfo {...this.props} />} />
				<Route
					path="/myexercises"
					render={() => <UserExercises {...this.props} />}
				/>
			</BrowserRouter>
		);
	}
}

function mapStateToProps(state) {
	return {
		registeringUser: state.registeringUser,
		loggingInUser: state.loggingInUser,
		checkingUserInfo: state.checkingUserInfo,
		updatingUserInfo: state.updatingUserInfo,
		fetchingUserExercises: state.fetchingUserExercises,
		token: state.token,
		error: state.error,
		id: state.id,
		message: state.message,
		user: state.user,
		exercises: state.exercises,
	};
}

export default connect(
	mapStateToProps,
	actions
)(App);
