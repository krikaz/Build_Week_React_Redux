import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import * as actions from './actions';
import styled from 'styled-components';

import Register from './components/register';
import Login from './components/login';
import Home from './components/home';
import UserInfo from './components/userInfo';
import UserExercises from './components/userExercises';
import Logout from './components/logout';

import imgLogin from './images/login.jpg';

const StyledContainer = styled.div`
	background-image: url(${imgLogin});
	background-size: 100%;
	width: 100vw;
	height: 100vh;
`;

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-around;
	padding: 1rem;
	background-color: rgb(255, 183, 82, 0.9);
`;

const StyledLink = styled(Link)`
	font-size: 2rem;
	text-decoration: none;
	color: rgb(3, 84, 16);
	:hover {
		background-color: rgb(21, 5, 99);
		color: rgba(220, 240, 240, 0.95);
	}
`;

class App extends React.Component {
	update = () => {
		if (localStorage.getItem('user')) {
			const retrievedObject = JSON.parse(localStorage.getItem('user'));
			if (this.props.id === null) {
				this.props.updateId(retrievedObject.user_id);
				this.props.updateToken(retrievedObject.token);
				this.props.updateIsLoggedIn();
				// console.log(retrievedObject.token);
				console.log('isloggedIn', this.props.isLoggedIn);
			}
		}
	};
	render() {
		this.update();
		console.log('isloggedIn', this.props.isLoggedIn);

		return (
			<BrowserRouter>
				<StyledContainer>
					<StyledNav>
						<StyledLink to="/">Home</StyledLink>

						{!this.props.isLoggedIn && (
							<StyledLink to="/register">Register</StyledLink>
						)}
						{!this.props.isLoggedIn && (
							<StyledLink to="/login">Log in</StyledLink>
						)}

						{this.props.isLoggedIn && (
							<StyledLink to="/myinfo">My account</StyledLink>
						)}
						{this.props.isLoggedIn && (
							<StyledLink to="/myexercises">My exercises</StyledLink>
						)}
						{this.props.isLoggedIn && (
							<StyledLink to="/logout">Log out</StyledLink>
						)}
					</StyledNav>

					<Route path="/" exact render={() => <Home {...this.props} />} />

					<Route path="/register" render={() => <Register {...this.props} />} />
					<Route path="/login" render={() => <Login {...this.props} />} />

					<Route path="/myinfo" render={() => <UserInfo {...this.props} />} />
					<Route
						path="/myexercises"
						render={() => <UserExercises {...this.props} />}
					/>
					<Route path="/logout" render={() => <Logout {...this.props} />} />
				</StyledContainer>
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
		isLoggedIn: state.isLoggedIn,
		idExercise: state.idExercise,
	};
}

export default connect(
	mapStateToProps,
	actions
)(App);
