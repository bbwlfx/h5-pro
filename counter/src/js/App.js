import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Root from './containers/Root';
import reducer from './reducers/reducer';
let store = createStore(reducer);
const render = () => {
	ReactDom.render(
		<Provider store={store}>
			<Root/>
		</Provider>,
		document.getElementById('root')
	)
}

render();

