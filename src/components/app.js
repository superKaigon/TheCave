import React, { Component } from 'react';
import NavBar from './navBar';
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
