import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import './index.css';
import App from './App';
import reducer from './thunk'
import * as serviceWorker from './serviceWorker';


// const initialState = {
// 	state: [1, 2, 3],
// 	selected: 1
// }

// function reducer(state = initialState, action) {
// 	console.log(action)
// 	return state
// }

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
    	<App />
		</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
