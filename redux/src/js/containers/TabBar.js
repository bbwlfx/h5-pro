import React, {Component} from 'react';
import {connect} from 'react-redux';
import {visibleFilter} from '../actions';
class TabBar extends Component {
	render () {
		const {type, showAll, showComplete, showActive} = this.props;
		console.log(visibleFilter);
		if (type == 'SHOW_ALL'){
			return (
				<div>
					<span>SHOW_ALL</span>
					<a href="javascript: void(0)" onClick={showActive}>SHOW_ACTIVE</a>
					<a href="javascript: void(0)" onClick={showComplete}>SHOW_COMPLETE</a>
				</div>
					
			)
		}else if (type == 'SHOW_ACTIVE') {
			return (
				<div>
					<a href="javascript: void(0)" onClick={showAll}>SHOW_ALL</a>
					<span>SHOW_ACTIVE</span>
					<a href="javascript: void(0)" onClick={showComplete}>SHOW_COMPLETE</a>
				</div>
			)
		}else {
			return (
				<div>
					<a href="javascript: void(0)" onClick={showAll}>SHOW_ALL</a>
					<a href="javascript: void(0)" onClick={showActive}>SHOW_ACTIVE</a>
					<span>SHOW_COMPLETE</span>
				</div>
					
			)
		}
	}
}
const mapStateToProps = (state) => {
	const {visibleFilter} = state;
	return {type: visibleFilter};
}

const mapDispatchToProps = (dispatch) => {
	return {
		showAll: () => {
			dispatch(visibleFilter('SHOW_ALL'));
		},
		showActive: () => {
			dispatch(visibleFilter('SHOW_ACTIVE'));	
		},
		showComplete: () => {
			dispatch(visibleFilter('SHOW_COMPLETE'));
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TabBar);