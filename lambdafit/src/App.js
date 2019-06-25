import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './actions';
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/register">Register</Link>
						</li>
						<li>
							<Link to="/login">Log in</Link>
						</li>
					</ul>
				</nav>

				{/* <Route path="/" exact render={() => <Home />} /> */}
				<Route path="/" exact render={() => <Home {...this.props} />} />

				<Route path="/register/" render={() => <Register {...this.props} />} />
				<Route path="/login/" render={() => <Login {...this.props} />} />
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
)(App);
