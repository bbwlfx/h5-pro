import React, {
	Component
} from 'react';

class CommentItem extends Component {
	onClickHandler() {
		this.refs.item.style.display = 'none';
	}
	render() {
		return (
			<div className="item" ref="item">
				<img src={this.props.url}></img>
				<p className="comment-content">{this.props.comment}</p>
				<a href="javascript:void(0)" onClick={this.onClickHandler.bind(this)}>撤回</a>
			</div>

		)


	}
}

export default CommentItem;