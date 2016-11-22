import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from './Item';

class List extends Component {
	render () {

		return (
			<div className="list-wrapper">
				<ul>
					{this.props.arr}
				</ul>
			</div>
		)
	}
}



const mapStateToProps = (state) => {
	const {addTodo} = state;
	return {
		arr: addTodo.map((item, index) => {
			if(item.filter) {
				return <Item text={item.text} key={1000+index} filter="true" dataid={item.id}></Item>
			} else {
				return <Item text={item.text} key={1000+index} filter="false" dataid={item.id}></Item>
			}
		})
	}
}


export default connect(mapStateToProps, null)(List);