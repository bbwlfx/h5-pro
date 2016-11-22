const visibleFilter = (state = 'SHOW_ALL', action) => {
	switch(action.type) {
		case 'SHOW_ALL':
		case 'SHOW_ACTIVE':
		case 'SHOW_COMPLETE':
			return action.type;
		default:
			return state;
	}
}

export default visibleFilter;