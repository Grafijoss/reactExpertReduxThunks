import { makeType, asyncMac, createReducer } from './ducks-helper.js'

const t = makeType('thunk')

const FETCH = t('fetch', true)

// const fetchStart = mac(FETCH.START)
// const fetchSucces = mac(FETCH.SUCCES, 'payload')
// const fetchError = mac(FETCH.ERROR, 'error')

const fetchAc = asyncMac(FETCH)

const url = 'https://jsonplaceholder.typicode.com/users'

const initialState = {
	data: {
		1: { name: 'Noticia' }
	},
	fetching: false,
	fetched: false,
	error: false
}

// it recives the initial-state and an object with the action handlers (switch cases)
export default createReducer(initialState, {
	[FETCH.START]: state => ({ ...state, fetching: true }),
	[FETCH.SUCCES]: (state, { payload }) => ({ ...state, data: payload }),
	[FETCH.ERROR]: (state, {error}) => ({...state, error})
})

/*
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
*/

// fetchAc
export const myThunk = payload =>
	async (dispatch, getState) => {
		console.log(payload)
		dispatch(fetchAc.start())
		try {
			const result = await fetch(url) // promise
			const json = await result.json() // promise
			dispatch(fetchAc.succes(json))
		} catch (error) {
			dispatch(fetchAc.error(error))
		}
	}