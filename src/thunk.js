const makeType = m => (a, isAsync) => {
	if (isAsync) {
		return {
			START: `${a}/${a}-start`,
			SUCCES: `${a}/${a}-succes`,
			ERROR: `${a}/${a}-error`
		}
	}
	return `${a}/${a}`
}

const t = makeType('thunk')

const FETCH = t('fetch', true)

// it is a function that only recives the type
const fetchStart = () => ({
	type: FETCH.START
})
// it recives a payload that it is all of data that the API return us
const fetchSucces = payload => ({
	type: FETCH.SUCCES,
	payload,
})
// it recives a error that it is all of data that the API return us
const fetchError = error => ({
	type: FETCH.ERROR,
	error,
})

const url = 'https://jsonplaceholder.typicode.com/users'

const initialState = {
	data: {

	},
	fetching: false,
	fetched: false,
	error: false
}

export default function reducer(state = initialState, action) {
	console.log(action)
	switch (action.type) {
		case FETCH.START:
			return {
				...state,
				fetching: true,
			}
		case FETCH.SUCCES:
			return {
				...state,
				data: action.payload
			}
		case FETCH.ERROR:
			return {
				...state,
				error: action.error
			}
		default:
			return state
	}
}

export const myThunk = payload =>
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