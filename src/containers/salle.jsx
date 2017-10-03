import React, { Component } from 'react';
import { connect } from 'react-redux';
import LocationList from './locationList'



class Salle extends Component {
	render() {
		const { salle } = this.props
		const {table} = this.props
		if (!salle) {
			return (
				<div>Sélectionner une salle</div>
			)
		}
		if (!table) {
			return (
				<div className='row'>
					<LocationList/>
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
			)
		}
		return (
			<div className='row'>
				<LocationList/>
				<ul className='col-md-4 listeTable1'>
					<li><img src={salle.image} /></li>
					<li><img src={salle.image} /></li>
				</ul>
				<ul className='col-md-4 listeTable2'>
					<li><img src={salle.image} /></li>
					<li><img src={salle.image} /></li>
				</ul>
				<div className='col-md-1'>Vous êtes assis en salle {salle.id} à la Table {table.name}</div>
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