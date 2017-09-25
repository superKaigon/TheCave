import React from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

import React, { Component } from 'react';

class Routes extends Component {

	render() {
		return (
			<Router history = {browserHistory}>
				<Routes path='/' component={App}>
				</Routes>
			</Router>

		);
	}

}

export default Routes;
