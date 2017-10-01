import React from 'react';
import ElementNavBar from '../containers/ElementNavBar';
import InfoCompte from '../containers/infoCompte';

const NavBar = () => {

	return (
		<nav className='row'>
			<div className='col-md-8'>
				<button type="button" className="btn btn-secondary">Blabla</button>
				<button type="button" className="btn btn-secondary">Contact Us</button>
				<button type="button" className="btn btn-secondary">Bla bla</button>
			</div>
			<div className='col-md-4'>
				Bonjour Jean-Louis On
			</div>

		</nav>
	)

}

export default NavBar
