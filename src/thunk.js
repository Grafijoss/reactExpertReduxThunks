import { makeType, asyncMac, createReducer } from './ducks-helper.js'
import { fetchReducer } from './hors'

const t = makeType('thunk')

const FETCH = t('fetch', true)

// const fetchStart = mac(FETCH.START)
// const fetchSucces = mac(FETCH.SUCCES, 'payload')
// const fetchError = mac(FETCH.ERROR, 'error')

const fetchAc = asyncMac(FETCH)


const initialState = {
	data: {
		1: { name: 'Noticia' }
	},
	fetching: false,
	fetched: false,
	error: false
}



// it recives the initial-state and an object with the action handlers (switch cases)
/*
export default createReducer(initialState, {
	[FETCH.START]: state => ({ ...state, fetching: true }),
	[FETCH.SUCCES]: (state, { payload }) => ({ ...state, data: payload }),
	[FETCH.ERROR]: (state, {error}) => ({...state, error})
})
*/

export default createReducer(initialState, fetchReducer(FETCH))

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
		const url = 'https://jsonplaceholder.typicode.com/users'
		dispatch(fetchAc.start())
		try {
			const result = await fetch(url) // promise
			const json = await result.json() // promise
			dispatch(fetchAc.succes(json))
		} catch (error) {
			dispatch(fetchAc.error(error))
		}
	}