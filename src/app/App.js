import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import CommentBox from '../comment/CommentBox';
import Home from '../home/Home';

// pollInterval is used to automatically refresh the page and check for new comments
class App extends Component {
	constructor(props) {
		super(props);
		this.state = { author: '', redirect: false };
		this.submitAuthor = this.submitAuthor.bind(this);
	}

	submitAuthor(newAuthor) {
		console.log(!newAuthor);
		console.log(!newAuthor.trim());
		if (!newAuthor && !newAuthor.trim()) {
			newAuthor = 'Anonymous';
		}
		this.setState({ author: newAuthor, redirect: true }, function() {
			console.log(this.state.author);	
		});
	}

	render() {
		return (
			<Router>
				<div id="app">
					<Route exact path='/' component={() => <Home submit={ this.submitAuthor } redirect={ this.state.redirect }/>}/>
					<Route exact path='/comments' component={() => <CommentBox url='http://localhost:3001/comments' pollInterval={2000} author={ this.state.author }/>}/>
				</div>
			</Router>	
		);	
	}	
}

export default App;
