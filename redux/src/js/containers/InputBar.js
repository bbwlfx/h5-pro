import React, {Component} from 'react';
import toggleTodo from '../actions';
class InputBar extends Component {
	addHandle() {
		this.props.store.dispatch(toggleTodo(this.refs._inp.value));
	}
	render () {
		return (
			<div>
				<input type="text" ref="_inp"></input>
				<button value="add" onClick={this.addHandle.bind(this)}>add</button>
			</div>
				
		)
	}
}
export default InputBar;