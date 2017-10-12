import React, { Component } from 'react';
import NavBar from './navBar';

export default class App extends Component {
	render() {
		return (		
			<div>
				<NavBar/>
				<div >
					{this.props.children}
				</div>
			</div>

		);
	}
}
