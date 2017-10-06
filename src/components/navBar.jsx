import React from 'react';
import InfoCompte from '../containers/infoCompte';

const NavBar = () => {

	return (
		<nav className="navbar navbar-dark bg-dark row">
			<div className='col-md-8'>
				<h1>THE CAVE</h1>
				<button type="button" className="btn btn-secondary">Contact Us</button>
				<button type="button" className="btn btn-secondary">Qui Sommes-nous ?</button>
			</div>
			<div className='col-md-4'>
				<InfoCompte/>
			</div>

		</nav>
	)

}

export default NavBar
