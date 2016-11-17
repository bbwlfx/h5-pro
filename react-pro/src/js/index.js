import React, {
	Component
} from 'react';
import ReactDom from 'react-dom';
import CommentWrapper from './components/CommentWrapper.js';
import FriendWrapper from './components/FriendWrapper.js';
import person from '../data/person.js';
import '../less/index.less';
class Root extends Component {
	render() {
		return (
			<div>
				<CommentWrapper></CommentWrapper>	
				<FriendWrapper personList={person}></FriendWrapper>
			</div>

		)
	}
}
ReactDom.render(
	<Root></Root>,
	document.getElementById('root')
)