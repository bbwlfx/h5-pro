import React, {Component} from 'react';

import Item from '../components/Item';
class List extends Component {
	render () {
		const state = this.props.store.getState();
		let arr = state.map((item, index) => {
			return <Item text={item} key={1000+index}></Item>
		})
		return (
			<div className="list-wrapper">
				<ul>
					{arr}
				</ul>
			</div>
		)
	}
}
export default List;