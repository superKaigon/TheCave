import React, {Component} from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import App from './components/app';
import InfoCompte from './containers/infoCompte'
import Connection from './containers/connection'
import Inscription from './containers/inscription'

class Routes extends Component {

	render() {
		return (
			<Router history = {browserHistory}>
				<Route path='/' component={App}/>
				<Route path='connection' component={Connection}/>
				<Route path='inscription' component={Inscription}/>
				
			</Router>

		);
	}

}

export default Routes;
