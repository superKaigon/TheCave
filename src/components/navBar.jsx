import React, { Component } from 'react';
import InfoCompte from '../containers/infoCompte';
import {Link} from 'react-router'

class NavBar extends Component {
	
	render () {

		return (
			<nav className="navbar  row">
				<div className='col-md-8'>
					<Link to ='/pageCourante/salle'><button type="button" className="btn btn-secondary" >THE CAVE</button></Link>
					<Link to = '/pageCourante/contactUs'><button type="button" className="btn btn-secondary" >Contact Us</button></Link>
					<Link to ='/pageCourante/weAre'><button type="button" className="btn btn-secondary" >Qui Sommes-nous ?</button></Link>	
				</div>
				<div className='col-md-4'>
					<InfoCompte/>
				</div>
	
			</nav>
		)
	}
	

}


export default (NavBar)
