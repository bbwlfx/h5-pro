import React, {Component} from 'react';
import ReactDom from 'react-dom';

import {createStore} from 'redux';

import List from './containers/List';
import InputBar from './containers/InputBar';

import reducer from './reducers/addTodo';

const store = createStore(reducer);
class Root extends Component {
	render () {
		return (
			<div>
				<InputBar store={store}/>
				<List store={store}/>	
			</div>
		)
	}
}

const render = () => {
	ReactDom.render(
		<Root></Root>,
		document.getElementById('root')
	)
}

store.subscribe(render);
render();