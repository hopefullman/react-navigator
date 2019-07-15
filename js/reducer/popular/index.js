export default (state,action)=>{
	if (action.type === 'changeActiveTintColor') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list[`${tabLabel}`] = action.data;
		return newState;
	}
	return state
}