import React from 'react';
import InfoCompte from '../containers/infoCompte';

const Salle1 = () => {

	return (
		<div className='row'>
			<ul className = 'col-md-3'>
					<li><button type="button" className="btn btn-secondary">Table 1</button></li>
					<li><button type="button" className="btn btn-secondary">Table 2</button></li>
					<li><button type="button" className="btn btn-secondary">Table 3</button></li>
					<li><button type="button" className="btn btn-secondary">Table 4</button></li>
			</ul>
			<ul className = 'col-md-4 listeTable1'>
				<li><img src = 'https://i.pinimg.com/236x/32/9c/11/329c1136511681e74f10ec2b45d3ccc2--fantasy-rpg-dark-fantasy.jpg'/></li>
				<li><img src = 'https://i.pinimg.com/236x/32/9c/11/329c1136511681e74f10ec2b45d3ccc2--fantasy-rpg-dark-fantasy.jpg'/></li>
			</ul>
			<ul className = 'col-md-4 listeTable2'>
				<li><img src = 'https://i.pinimg.com/236x/32/9c/11/329c1136511681e74f10ec2b45d3ccc2--fantasy-rpg-dark-fantasy.jpg'/></li>
				<li><img src = 'https://i.pinimg.com/236x/32/9c/11/329c1136511681e74f10ec2b45d3ccc2--fantasy-rpg-dark-fantasy.jpg'/></li>
			</ul>
			<div className='col-md-1'>Vous êtes assis en salle 1 à la Table 2</div>
		</div>
	)

}

export default Salle1
