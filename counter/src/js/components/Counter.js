import React, {Component} from 'react';

class Counter extends Component {
	render() {
		const {value, increaseHandle, decreaseHandle} = this.props;
		return (
			<div>
				<button onClick={decreaseHandle}>-</button>
				<span>{value}</span>
				<button onClick={increaseHandle}>+</button>
			</div>
		)
	}
}



export default Counter;