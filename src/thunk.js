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
const fetchError = error => ({
	type: FETCH_ERROR,
	error,
})

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