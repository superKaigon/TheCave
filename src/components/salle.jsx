import React from 'react';
import InfoCompte from '../containers/infoCompte';

const NavBar = () => {

	return (
		<div className='row'>
			<div className = 'col-md-10'>
				<div className = 'col-md-5'>
					<div><button>Table 1</button></div>
					<div><button>Table 2</button></div>
				</div>
				<div className = 'col-md-5'>
					<div><button>Table 3</button></div>
					<div><button>Table 4</button></div>
				</div>
			</div>
			<div className='col-md-2'>Vous êtes assis en salle 1 à la Table 2</div>
		</div>
	)

}

export default NavBar
