import React, {Component} from 'react';
import ReactDom from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import List from './containers/List';
import InputBar from './containers/InputBar';

import reducer from './reducers/addTodo';

const store = createStore(reducer);
class Root extends Component {
	render () {
		return (
			<div>
				<InputBar/>
				<List/>	
			</div>
		)
	}
}

const render = () => {
	ReactDom.render(
		<Provider store={store}>
			<Root/>	
		</Provider>,
		document.getElementById('root')
	)
}

store.subscribe(render);
render();