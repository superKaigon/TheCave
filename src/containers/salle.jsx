import React, { Component } from 'react';
import { connect } from 'react-redux';
import LocationList from './locationList'
import NavBarChoixSalle from '../components/NavBarChoixSalle';



class Salle extends Component {
	render() {
		const { salle, table } = this.props

		if (!salle) {
			return (
				<div>
					<NavBarChoixSalle />
					<div>Sélectionner une salle</div>
				</div>
			)
		}
		if (!table) {
			return (
				<div>
					<NavBarChoixSalle />
					<div className='row'>
						<LocationList />
						<ul className='col-md-4 listeTable1'>
							<li><img src={salle.image} /></li>
							<li><img src={salle.image} /></li>
						</ul>
						<ul className='col-md-4 listeTable2'>
							<li><img src={salle.image} /></li>
							<li><img src={salle.image} /></li>
						</ul>
						<div className='col-md-1'>Sélectionnez une table</div>
					</div>
				</div>
			)
		}
		return (
			<div>
				<NavBarChoixSalle />
				<div className='row'>
					<LocationList />
					<ul className='col-md-4 listeTable1'>
						<li><img src={salle.image} /></li>
						<li><img src={salle.image} /></li>
					</ul>
					<ul className='col-md-4 listeTable2'>
						<li><img src={salle.image} /></li>
						<li><img src={salle.image} /></li>
					</ul>
					<div className='col-md-1'>Vous êtes assis en salle {salle.id} à la {table.name}</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		salle: state.activeSalle,
		table: state.activeTable

	}
}

export default connect(mapStateToProps)(Salle)