import React from 'react';
import { render } from 'react-dom';
import App from './App';

// pollInterval is used to automatically refresh the page and check for new comments

render(
	<App />,
	document.getElementById('root')
);