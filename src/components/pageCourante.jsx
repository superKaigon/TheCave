import React, { Component } from 'react';
import NavBarChoixSalle from './NavBarChoixSalle';
import Salle from '../containers/salle';
import WeAre from './weAre'
import ContactUs from './contactUs'
import {connect} from 'react-redux'

class PageCourante extends Component {
  
  render() {
    const {status} = this.props
    if (status == 'THE_CAVE' || status == null) {
      return (
        <div>
          <NavBarChoixSalle/>
          <Salle/>
        </div>
      )
    }
    if (status == 'CONTACT_US'){
      return (
        <ContactUs/>
      )
    }
    if (status == 'WE_ARE'){
      return (
        <WeAre/>
      )
    }

  }
}

const mapStateToProps = (state) => {
  return {
    status : state.activeStatus
  }
}

export default connect (mapStateToProps)(PageCourante)
