import React, {Component} from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import App from './components/app';
import InfoCompte from './containers/infoCompte'
import Connection from './containers/connection'

class Routes extends Component {

	render() {
		return (
			<Router history = {browserHistory}>
				<Route path='/' component={App}/>
				<Route path='connection' component={Connection}/>
				
			</Router>

		);
	}

}

export default Routes;
