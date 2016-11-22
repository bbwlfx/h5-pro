import React, {Component} from 'react';
import {connect} from 'react-redux';

import {changeTodo} from '../actions';
class Item extends Component {
	render () {
		let style = null;
		const {filter, onClickHandle, text, dataid} = this.props;
		if (filter == 'false') {
			style = {textDecoration: 'none'}
		}else {
			style = {textDecoration: 'line-through'}
		}
		return (
			<li className="item" style={style} onClick={() => {onClickHandle(dataid)}}>{text}</li>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClickHandle: (id) => {
			dispatch(changeTodo(id));
		}
	}
}

export default connect(null, mapDispatchToProps)(Item);