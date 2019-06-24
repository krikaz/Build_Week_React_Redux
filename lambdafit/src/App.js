import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './actions';
import Register from './components/register';
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

				{/* <Route path="/" exact component={Home} /> */}
				<Route
					path="/register/"
					render={() => <Register props={this.props} />}
				/>
				{/* <Route path="/login/" component={Users} /> */}
			</BrowserRouter>
		);
	}
}

function mapStateToProps(state) {
	// console.log(state);
	return {
		exercises: state.exercises,
		registeringUser: state.registeringUser,
		token: state.token,
		error: state.error,
		test: state.test,
	};
}

export default connect(
	mapStateToProps,
	actions
)(App);
