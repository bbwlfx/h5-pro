


const saveState = (state) => {
	try {
		const {addTodo} = state;
		const data = JSON.stringify(addTodo);
		localStorage.setItem('state', data);
	}catch (err) {
		console.log(err);
	}
		

}

const getState = () => {
	try {
		const data = localStorage.getItem('state');
		const state = JSON.parse(data);
		if(state == null) {
			return undefined;
		}	
		return state;
	}catch(err) {
		return undefined;
	}

}

export {saveState, getState};