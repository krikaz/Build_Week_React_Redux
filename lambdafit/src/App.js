import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './actions';
import Register from './components/register';
import Login from './components/login';
import { BrowserRouter, Route, Link } from 'react-router-dom';

let retrievedObject = { message: '' };

class App extends React.Component {
	render() {
		// console.log(this.props);
		if (localStorage.getItem('user')) {
			retrievedObject = JSON.parse(localStorage.getItem('user'));
		}
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

				{/* <Route path="/" exact component={Home} /> */}
				<p>{retrievedObject.message}</p>

				<Route
					path="/register/"
					render={() => <Register props={this.props} />}
				/>
				<Route path="/login/" render={() => <Login props={this.props} />} />
			</BrowserRouter>
		);
	}
}

function mapStateToProps(state) {
	// console.log(state);
	return {
		exercises: state.exercises,
		registeringUser: state.registeringUser,
		loggingInUser: state.loggingInUser,
		token: state.token,
		error: state.error,
		test: state.test,
		message: state.message,
	};
}

export default connect(
	mapStateToProps,
	actions
)(App);
