import React, {
	Component
} from 'react';
import FriendList from './FriendList.js';

class FriendWrapper extends Component {
	render() {
		return (
			<div className="friendWrapper">
				<FriendList personList={this.props.personList}></FriendList>
			</div>

		)
	}
}

export default FriendWrapper;