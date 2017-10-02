import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectUser } from '../actions/index'

class InfoCompte extends Component {

    render () {
        return (
        <div>
                {
                    this.props.myUsers.map((user) => {
                        return (
                            <div key = {user.lastname}>Bonjour {user.firstname}</div>
                         );
                    })
                }
        </div>
        )
    }


}

function  mapStateToProps(state) {
    return {
        myUsers: state.users
    }
}

export default connect(mapStateToProps)(InfoCompte)
