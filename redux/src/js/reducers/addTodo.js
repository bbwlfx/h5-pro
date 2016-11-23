import {v4} from 'node-uuid';
import {getState} from '../localStorageAPI';
const initState = getState();
const addTodo = (state = initState ? initState : [], action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return [...state, {text: action.text, filter: false, id: v4()}];
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