import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {
	render() {
		return <div className="App">Test</div>;
	}
}

function mapStateToProps(state) {
	// console.log(state);
	return {
		exercises: state.exercises,
	};
}

export default connect(
	mapStateToProps,
	actions
)(App);
