import React, {
	Component
} from 'react';
import FriendItem from './FriendItem.js';
class FriendList extends Component {
	render() {
		let items = this.props.personList.map((value, index) => {
			return <FriendItem person={value} key={10000+index}></FriendItem>
		})
		return (
			<div className="friendList">
				{
					items
				}
			</div>
		)
	}
}
export default FriendList;