export const makeType = m => (a, isAsync) => {
	if (isAsync) {
		return {
			START: `${a}/${a}-start`,
			SUCCES: `${a}/${a}-succes`,
			ERROR: `${a}/${a}-error`
		}
	}
	return `${a}/${a}`
}

// makeActionCreator
export function mac(type, ...argNames) {
	return function ac(...args) {
		const action = { type }
		argNames.forEach((arg, index) => {
			action[argNames[index]] = args[index]
		})
		return action
	}
}

export function asyncMac(types) {
	return {
		start: mac(`${types.START}`,),
		succes: mac(`${types.SUCCES}`, 'succes'),
		error: mac(`${types.ERROR}`, 'error'),
	}
}

export function createReducer(initialState, actionHandlers) {
	return function reducer(state = initialState, action) {
		if (actionHandlers.hasOwnProperty(action.type)) {
			console.log(action)
			const newState = actionHandlers[action.type](state, action)
			if (newState !== state) {
				return newState
			}
		}
		return state
	}
}