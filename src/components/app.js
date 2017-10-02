import React, { Component } from 'react';
import NavBar from './navBar';
import Salle1 from './salle1';
import PageCourante from './pageCourante';

export default class App extends Component {
	render() {
		return (

			<div>
				<NavBar/>
				<div className = 'pageCourante'>
					<PageCourante/>
				</div>
			</div>

		);
	}
}
