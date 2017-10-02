import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectUser } from '../actions/index'
import { bindActionCreators } from 'redux'

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

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectUser:selectUser},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(InfoCompte)
