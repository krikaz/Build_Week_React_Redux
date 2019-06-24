import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './actions';
import Register from './components/register';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Register props={this.props} />
			</div>
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
