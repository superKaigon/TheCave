import React, { Component } from 'react';
import InfoCompte from '../containers/infoCompte';
import {selectStatus} from '../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class NavBar extends Component {
	
	render () {

		return (
			<nav className="navbar navbar-dark bg-dark row">
				<div className='col-md-8'>
					<button type="button" className="btn btn-secondary" onClick = {() => this.props.selectStatus('THE_CAVE')}>THE CAVE</button>
					<button type="button" className="btn btn-secondary" onClick = {() => this.props.selectStatus('CONTACT_US')}>Contact Us</button>
					<button type="button" className="btn btn-secondary" onClick = {() => this.props.selectStatus('WE_ARE')}>Qui Sommes-nous ?</button>
				</div>
				<div className='col-md-4'>
					<InfoCompte/>
				</div>
	
			</nav>
		)
	}
	

}



const mapDispatchToProps = (dispatch) => {
	return bindActionCreators ({selectStatus:selectStatus}, dispatch)
}

export default connect(null, mapDispatchToProps)(NavBar)
