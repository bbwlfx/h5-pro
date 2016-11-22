import React, {Component} from 'react';
import {connect} from 'react-redux';
import toggleTodo from '../actions';
class InputBar extends Component {
	// addHandle() {
	// 	this.props.store.dispatch(toggleTodo(this.refs._inp.value));
	// }
	render () {
		const {onClickHandle, getValue} = this.props;
		return (
			<div>
				<input type="text" ref="_inp"></input>
				<button value="add" onClick={() => {
					onClickHandle(this.refs._inp.value)
				}}>add</button>
			</div>
				
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClickHandle: (text) => {
			dispatch(toggleTodo(text));
		}
	}
}
export default connect(null, mapDispatchToProps)(InputBar);