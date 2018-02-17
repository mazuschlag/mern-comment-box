// CommentBox.js 
import React, { Component } from 'react';
import axios from 'axios';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import style from './style';

class CommentBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
		this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
		this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
	}

	postAuthor() {
		axios.post(this.props.url, this.props.author)
		.then(res => {
		})
		.catch(err => {
			console.error(err);
		});	
	}

	loadCommentsFromServer() {
		axios.get(this.props.url)
		.then(res => {
			this.setState({ data: res.data });
		});
	}

	handleCommentSubmit(text) {
		// Immediately add the comment to the list
		let author = this.props.author;
		let comment = { author, text };
		let comments = this.state.data;
		comment.id = Date.now();
		let newComments = comments.concat([comment]);
		this.setState({ data: newComments });
	
		axios.post(this.props.url, comment)
		.then(res => {
			this.setState({ data: comments });
		})
		.catch(err => {
			console.error(err);
		});
	}

	componentDidMount() {
		this.postAuthor();
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	}

	render() {
		return (
			<div style={ style.commentBox }>
				<h2>Comments:</h2>
				<CommentList data={ this.state.data }/>
				<CommentForm onCommentSubmit={ this.handleCommentSubmit }/>
			</div>
		);
	}
}

export default CommentBox;