import React, { Component } from 'react';
import NavBar from './navBar';
import Salle from './salle';
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
