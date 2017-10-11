import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './components/app';
import InfoCompte from './containers/infoCompte'
import Connection from './containers/connection'
import Inscription from './containers/inscription'
import ContactUs from './components/contactUs'
import WeAre from './components/weAre'
import PageCourante from './components/pageCourante'
class Routes extends Component {

	render() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={App}>
					<Route path='connection' component={Connection}/>
					<Route path='inscription' component={Inscription}/>
					<Route path='pageCourante' component={PageCourante}/>
					<Route path='weAre' component={WeAre}/>
					<Route path='contactUs' component={ContactUs}/>
				</Route>

			</Router>

		);
	}

}

export default Routes;
