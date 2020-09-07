export const fetchReducer = ({ START, SUCCES, ERROR }) => ({
	[START]: state => ({ ...state, fetching: true }),
	[SUCCES]: (state, { payload }) => ({ ...state, data: payload, fetching: false, fetched: true }),
	[ERROR]: (state, { error }) => ({ ...state, error, fetching: false })
})