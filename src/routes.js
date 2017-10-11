import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './components/app';
import InfoCompte from './containers/infoCompte'
import Connection from './containers/connection'
import Inscription from './containers/inscription'
import ContactUs from './components/contactUs'
import WeAre from './components/weAre'
import PageCourante from './components/pageCourante'
import Salle from './containers/salle'
class Routes extends Component {

	render() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={App} routes = {Routes}>
					<Route path = 'pageCourante' component = {PageCourante}>
						<Route path='/pageCourante/salle' component={Salle}/>
						<Route path='/pageCourante/weAre' component={WeAre} />
						<Route path='/pageCourante/contactUs' component={ContactUs} />
					</Route>
					<Route path='connection' component={Connection} />
					<Route path='inscription' component={Inscription} />
				</Route>


			</Router>

		);
	}

}

export default Routes;
