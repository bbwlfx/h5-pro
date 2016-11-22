

const toggleTodo = (text) => {
	return {type:'ADD_TODO', text,}
};

const changeTodo = (id) => {
	return {type: 'CHANGE', id,}
}


const visibleFilter = (filter) => {
	return {type: filter}
}
export {toggleTodo, changeTodo};