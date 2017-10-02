import React, { Component } from 'react';
import NavBarChoixSalle from './NavBarChoixSalle';
import Salle from '../containers/salle';

export default class PageCourante extends Component {
  render() {
    return (
			<div>
				<NavBarChoixSalle/>
				<Salle/>
			</div>


    );
  }
}
