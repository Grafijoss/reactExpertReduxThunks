export default payload => 
	(dispatch, getState) => {
		// console.log(payload)
		const state = getState()
		console.log(state)
}