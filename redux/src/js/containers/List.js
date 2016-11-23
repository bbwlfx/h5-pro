import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from './Item';

import {saveState} from '../localStorageAPI';

class List extends Component {
	render () {
		const {arr} = this.props;
		return (
			<div className="list-wrapper">
				<ul>
					{arr}
				</ul>
			</div>
		)
	}
}



const mapStateToProps = (state) => {
	const {addTodo, visibleFilter} = state;
	console.log(state);
	saveState(state);
	return {
		arr: addTodo.map((item, index) => {
			if (visibleFilter == 'SHOW_ALL') {
				if (item.filter) {
					return <Item text={item.text} key={1000+index} filter="true" dataid={item.id}></Item>
				} else {
					return <Item text={item.text} key={1000+index} filter="false" dataid={item.id}></Item>
				}
			}else if (visibleFilter == 'SHOW_ACTIVE') {
				if (!item.filter) {
					return <Item text={item.text} key={1000+index} filter="false" dataid={item.id}></Item>
				}
			}else {
				if (item.filter) {
					return <Item text={item.text} key={1000+index} filter="true" dataid={item.id}></Item>
				}
			}
		})
			
	}
}


export default connect(mapStateToProps, null)(List);