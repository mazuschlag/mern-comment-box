// Home.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './style';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { name: ''};
		this.handleAuthorChange = this.handleAuthorChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleAuthorChange(e) {
		this.setState({ name: e.target.value });
	}

	handleSubmit(e) {
		console.log("Handling author submit");
		this.props.onClick(this.state.author.trim());
		this.setState({ name: '' });
	}

	render() {
		return(
			<form onSubmit={ this.handleSubmit } >
				<input type='text' placeholder='Your name...' value={ this.state.author } onChange={ this.handleAuthorChange } />
				<Link to={'/comments'} params: {}>
					<input type='submit' style={ style.commentFormPost } value='Post' />
				</Link>
			</form>
		)
	}

}

export default Home;