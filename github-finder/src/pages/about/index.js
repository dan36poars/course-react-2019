import React from 'react';
import {
	AboutContainer
} from './style';

function index() {
	return (
		<AboutContainer className="container">
			<h1>About this App</h1>
			<p>App to search GitHub users</p>
			<p>Version: 1.0.0</p>
		</AboutContainer>
	)
}

export default index
