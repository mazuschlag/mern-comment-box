// Home.js
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import style from '../style';

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
			<div style={ style.homePage }>
				<form style={ style.homePageForm } onSubmit={ this.handleSubmit }>
					<input type='text' style={ style.homePageText }placeholder='Username' value={ this.state.author } onChange={ this.handleAuthorChange }/>
						<input type='submit' style={ style.homePagePost } value='Start'/>
				</form>
			</div>
		);
	}

}

export default Home;