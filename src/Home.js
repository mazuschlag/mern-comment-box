// Home.js
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import style from './style';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			name: '', 
		};
		this.handleAuthorChange = this.handleAuthorChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleAuthorChange(e) {
		this.setState({ name: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log("Handling author submit");
		this.props.submit(this.state.name); 
	}

	render() {
		if (this.props.redirect) {
			return <Redirect push to='/comments'/>;
		}
		return(
			<form onSubmit={ this.handleSubmit }>
				<input type='text' placeholder='Your name...' value={ this.state.author } onChange={ this.handleAuthorChange }/>
					<input type='submit' style={ style.commentFormPost } value='Post'/>
			</form>
		);
	}

}

export default Home;