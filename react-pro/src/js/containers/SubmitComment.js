import React, {
	Component
} from 'react';
class SubmitComment extends Component {
	constructor() {
		super();

	}
	onSubmit() {
		if (this.refs.content.value) {
			this.props.clickHandler(this.refs.content.value);
		} else {
			alert('请输入文字')
		}
		this.refs.content.value = '';
	}

	render() {
		return (
			<div className="submitWrapper">
				<textarea ref="content" placeholder="在这里可以输入文字哦~"></textarea>
				<button onClick={this.onSubmit.bind(this)} value="提交评论">提交评论</button>
			</div>
		)
	}
}
export default SubmitComment;