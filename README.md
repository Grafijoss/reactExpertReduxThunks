## INDEX.JS

1. yarn add redux react-redux redux-thunk
2. config index.js
3. wrap the app inside the react-redux provider
```javascript
	<Provider store={store}>
    <App />
	</Provider>
```
4. We import createStore from redux and create the store function
5. STORE receives a function reducer
6. we have to tell the store to use the MIDDELWARE
7. We import applyMiddleware fom redux
```javascript
import { createStore, applyMiddleware } from 'redux'
```
> Note: applyMiddleWare it is a function that cans recive all of  the mIddlewares thaT we want

8. we import thunk from redux-thunk
```javascript
import thunk from 'redux-thunk'
```
9. To tell REDUX that it has to use THUNK as MIDDLELWARE we go to createStore and as the second parameter inside applyMiddelware(thunk) we send the MIDDELWARES
```javascript
const store = createStore(reducer, applyMiddleware(thunk))
```

## APP.JS

1. We connect REDUX
2. Import connect from react-redux
3. Curring the connect function export default connect()(App)
```javascript
import { connect } from 'react-redux'
export default connect(mapStateToProps, mapDispatchToProps)(App) // curring
```
5. We define const mapStateToProps
```javascript
const mapStateToProps = state => state
```
6. We define const mapDispatchToProps it will return us an object
7. We will say that we go to DISPATCH a thunk 

```javascript
const mapDispatchToProps = dispatch => ({
	myThunk: payload => dispatch(myThunk(payload)),
})
```
8. We import create myThunk and we import it
```javascript
import myThunk from './thunk'
```

## THUNK.JS

1. we export a default a function CURRYING that recives as a first parameter a payload and when is is call for second time recives dispatch and getState
```javascript
export default payload => 
	(dispatch, getState) => {
		console.log(payload)
}
```

> Note: we can check the complete status of the application with **getState()** AND **dispatch()** it will allow to dispatch more actions

## APP.JS

9. We will set the constructor of app.js that recives props as argument
```javascript
	constructor(props)
		super(props)
```
10. We will DESCTRUCTURYING myThunk within the constructor
```javascript
	constructor(props) {
		super(props)
		const { myThunk } = this.props
		myThunk('lala')
	}
```

## APP.JS

10. we change the initialState to try the getState of thunk

```javascript
const initialState = {
	state: [1, 2, 3],
	selected: 1
}

function reducer(state = initialState, action) {
	return state
}
```


___
## 2. EFFECTS FROM THUNKS

## THUNK.JS

1. we set the constants and functions for start, succes and error

```javascript
const FETCH_START = 'start'
const FETCH_SUCCES = 'succes'
const FETCH_ERROR = 'error'

// it is a function that only recives the type
const fetchStart = () => ({
	type: FETCH_START
})

// it recives a payload that it is all of data that the API return us
const fetchSucces = payload => ({
	type: FETCH_SUCCES,
	payload,
})

// it recives a error that it is all of data that the API return us
const fetchErro = error => ({
	type: FETCH_ERROR,
	error,
})
```

2. we dispatch fetchStart() function

```javascript
export default payload =>
	(dispatch, getState) => {
		dispatch(fetchStart())
	}
```

3. we use async await to resolve the fetch request
> **async** alows us to write the same code that we use with promises but we do not need to write callBacks

4. we put the **async** before the dispatch function to say it that it is an asynchronous function
```javascript
async (dispatch, getState)
```
5. Now we can use the reserved word **await** what it will do is assign the constant the value when the promise is resolved
```javascript
const url = 'https://jsonplaceholder.typicode.com/users'

export default payload =>
	async (dispatch, getState) => {
		dispatch(fetchStart())
		try {
			const result = await fetch(url) // promise
			const json = await result.json() // promise
			dispatch(fetchSucces(json))
		} catch (error) {
			dispatch(fetchError(error))
		}
	}
```

## APP.JS

1. we can capture the actions that are despatching from the reducer function
```javascript
function reducer(state = initialState, action) {
	console.log(action)
	return state
}
```
2. now we can asign the answers to the reducers
