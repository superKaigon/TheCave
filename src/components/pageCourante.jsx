import React, { Component } from 'react';
import NavBarChoixSalle from './NavBarChoixSalle';
import Salle1 from './salle1';

export default class PageCourante extends Component {
  render() {
    return (
			<div>
				<NavBarChoixSalle/>
				<Salle1/>
			</div>


    );
  }
}
