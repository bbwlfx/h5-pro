const visibleFilter = (state = '', action) => {
	switch(action.type) {
		case 'SHOW_ALL':
		case 'SHOW_ACTIVE':
			return action.type;
		default:
			return state;
	}
}

export default visibleFilter;