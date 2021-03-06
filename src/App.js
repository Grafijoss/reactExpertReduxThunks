import React, { Component } from 'react';
import { connect } from 'react-redux'

import {myThunk} from './thunk'

import logo from './logo.svg';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props)
		const { myThunk } = this.props
		myThunk('lala')
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
						</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
						</a>
				</header>
			</div>
		);
	}
}

const mapStateToProps = state => state
const mapDispachToProps = dispatch => ({
	myThunk: payload => dispatch(myThunk(payload)),
})

export default connect(mapStateToProps, mapDispachToProps)(App) // curring
