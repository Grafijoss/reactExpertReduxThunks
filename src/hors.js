export const fetchReducer = ({ START, SUCCES, ERROR }) => ({
	[START]: state => ({ ...state, fetching: true }),
	[SUCCES]: (state, { payload }) => ({ ...state, data: payload }),
	[ERROR]: (state, { error }) => ({ ...state, error })
})