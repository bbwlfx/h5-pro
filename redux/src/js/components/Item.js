import react, {Component} from 'react';

class Item extends Component {
	render () {
		return (
			<li className="item">{this.props.text}</li>
		)
	}
}

export default Item;