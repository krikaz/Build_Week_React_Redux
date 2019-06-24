import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Register from './components/register';

class App extends React.Component {
	render() {
		return (
      <div className="App">
       <Register />
      </div>
    );
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
