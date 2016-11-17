import React, {
	Component
} from 'react';

class FriendItem extends Component {
	constructor() {
		super();
		this.state = {
			invite: false
		}
	}

	onClickHandler() {
		this.setState({
			invite: !this.state.invite
		})
	}
	render() {

		const person = this.props.person;
		var {
			name,
			url,
			des
		} = person;
		var className = 'green';
		if (this.state.invite) {
			className = 'white';
		}
		return (
			<div className="item">
				<img src={url}></img>
				<div>
					<p className="name">{name}</p>
					<p className="des">{des}</p>
					<button className={className} onClick={this.onClickHandler.bind(this)}>{this.state.invite ? '收回邀请' : '邀请回答'}</button>
				</div>
			</div>
		)
	}
}

export default FriendItem;