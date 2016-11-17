import React, {
	Component
} from 'react';
import CommentList from './CommentList.js';
import SubmitComment from '../containers/SubmitComment.js';
class CommentWrapper extends Component {
	constructor() {
		super();
		this.state = {
			commentList: []
		}
	}

	clickHandler(value) {
		const item = {};
		item.comment = value;
		item.url = './src/img/logo.png';
		this.setState({
			commentList: [...this.state.commentList, item]
		})
	}
	render() {
		return (
			<div className="commentWrapper">
				<CommentList commentList={this.state.commentList}></CommentList>
				<SubmitComment clickHandler={this.clickHandler.bind(this)}></SubmitComment>
			</div>
		)
	}
}
export default CommentWrapper;