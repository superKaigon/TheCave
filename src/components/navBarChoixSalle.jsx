import React from 'react';
import ElementNavBar from '../containers/ElementNavBar';
import InfoCompte from '../containers/infoCompte';

const NavBarChoixSalle = () => {

	return (
		<nav className='row'>
			<div className='col-md-12'>
				<button className='col-md-4 btn btn-secondary'>Salle 1</button>
				<button className='col-md-4 btn btn-secondary'>Salle 2</button>
				<button className='col-md-4 btn btn-secondary'>Salle 3</button>
			</div>
		</nav>
	)
}

export default NavBarChoixSalle
