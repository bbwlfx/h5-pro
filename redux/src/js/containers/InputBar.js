import react, {Component} from 'react';
import actions from '../../actions';
class InputBar extends Component {
	addHandle(text) {
		this.props.store.dispatch(toggleTodo(text));
	}
	render () {
		return (
			<input type="text" ref="_inp"></input>
			<button value="add" onClick={this.addhandle(this.refs._inp.value)}>add</button>
		)
	}
}