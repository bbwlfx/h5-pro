import React, {Component} from 'react';
import {connect} from 'react-redux';

import Counter from '../components/Counter';
import creator from '../actions';
const mapStateToProps = (state) => {
	return {
		value: state
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		increaseHandle: () => {
			dispatch(creator('INCREASE'));
		},
		decreaseHandle: () => {
			dispatch(creator('DECREASE'));
		},
	}
}
const Root = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Root;




