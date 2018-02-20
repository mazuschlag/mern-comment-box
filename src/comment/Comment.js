// Comment.js
import React, { Component } from 'react';
import style from '../style';

class Comment extends Component {
	render() {
		return(
			<div style={ style.comment }>
				<h3>{ this.props.author }</h3>
				<p>{ this.props.comment }</p>
			</div>
		)
	}
}

export default Comment;