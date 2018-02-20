// CommentForm.js
import React, { Component } from 'react';
import style from '../style';

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = { text: ''};
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleTextChange(e) {
		this.setState({ text: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		let text = this.state.text.trim();
		if (!text) {
			return;
		}
		this.props.onCommentSubmit(text);
		this.setState({ text: '' });
	}

	render() {
		return (
			<form style={ style.commentForm } onSubmit={ this.handleSubmit }>
				<input type='text' placeholder='Say something...' style={ style.commentFormText } value={ this.state.text } onChange={ this.handleTextChange } />
				<input type='submit' style={ style.commentFormPost } value='Post' />
			</form>
		);
	}
}

export default CommentForm;