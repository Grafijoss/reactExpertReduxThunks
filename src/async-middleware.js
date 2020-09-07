export default function ({ dispatch, getState }) {
	return next => async action => {
		const {
			actions,
			request,
		} = action

		if (!actions) {
			return next(action)
		}

		const { start, succes, error } = actions

		if (!start || !succes || !error) {
			throw new Error('Se necesitan 3 acciones')
		}

		if (typeof request !== 'function') {
			throw new Error('Request debe ser una funcion')
		}

		dispatch(start())
		try {
			const result = await request()
			dispatch(succes(result))
		} catch (e) {
			dispatch(error(e))
		}

	}
}