import React, {
	Component
} from 'react';
import CommentItem from './CommentItem.js';
class CommentList extends Component {
	render() {
		let items = this.props.commentList.map((value, index) => {
			return <CommentItem comment={value.comment} url={value.url} key={index + 10000}></CommentItem>
		})
		return (
			<div className="commentList">
			{
				items
			}
			</div>
		)
	}
}
export default CommentList;