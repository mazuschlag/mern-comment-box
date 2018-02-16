import React, {Component} from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import CommentBox from './CommentBox';
import Home from './Home';

// pollInterval is used to automatically refresh the page and check for new comments
class App extends Component {
	constructor(props) {
		super(props);
		this.state = { author: '' };
		this.handleAuthorSubmit = this.handleAuthorSubmit.bind(this);
	}

	handleAuthorSubmit(inAuthor) {
		this.setState({ author: inAuthor });
		axios.post(this.props.url, this.state.author)
		.then(res => {
		})
		.catch(err => {
			console.error(err);
		});	
	}

	render() {
		return (
			<Router>
				<div>
					<Route exact path='/' component={() => <Home url='http://localhost:3001/author' onClick={ this.handleAuthorSubmit }/>}/>
					<Route exact path='/comments' component={() => <CommentBox url='http://localhost:3001/comments' pollInterval={2000} author={ this.state.author }/>}/>
				</div>
			</Router>	
		);	
	}	
}

export default App;
