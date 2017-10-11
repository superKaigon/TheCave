import React, { Component } from 'react';
import NavBarChoixSalle from './NavBarChoixSalle';
import Salle from '../containers/salle';


class PageCourante extends Component {

  render() {

    return (
      <div>
        <NavBarChoixSalle />
        <Salle />
      </div>
    )

  }
}

export default (PageCourante)
