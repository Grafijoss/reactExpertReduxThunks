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
**Note: applyMiddleWare it is a function that cans recive all of  the moddlewares tha we want**
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
**Note: we can check the complete status of the application with getState() and dispatch() it will allow to dispatch more actions**

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
## Versionamiento del proyecto

> Las credenciales las configura el usuario con rol de **MASTER**