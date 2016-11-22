var id = 0;

const addTodo = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return [...state, {text: action.text, filter: false, id: id++}];
		case 'CHANGE':
			return state.map((item, index) => {
				if(item.id === action.id) {
					return Object.assign({}, item, {
						filter: !item.filter
					})
				}else {
					return item;
				}
			})
		default:
			return state;
	}
}


export default addTodo;