import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from '../components/Item';



class List extends Component {
	render () {
		// const state = this.props.store.getState();
		// let arr = state.map((item, index) => {
		// 	return <Item text={item} key={1000+index}></Item>
		// })
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
	return {
		arr: state.map((item, index) => {
			return <Item text={item} key={1000+index}></Item>
		})
	}
}
export default connect(mapStateToProps, null)(List);