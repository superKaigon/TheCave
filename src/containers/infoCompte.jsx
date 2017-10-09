import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, browserHistory } from 'react-router'
import { selectUser, selectSalle, selectTable } from '../actions/index'

class InfoCompte extends Component {

    render() {
        const { user } = this.props
        const resetUser = null
        const resetTable = null
        const resetSalle = null

        if (!user) {
            return (
                <div>
                    <Link to='connection'><button type="button" className="btn btn-secondary">Connexion</button></Link>
                    <Link to='inscription'><button type="button" className="btn btn-secondary">Inscription</button></Link>
                </div>
            )
        }
        return (
            <div>

                <div key={user.lastname}>Bonjour {user.firstname}</div>
                <button type="button" className="btn btn-secondary" onClick={() => this.resetActive(resetUser, resetTable, resetSalle)}>Déconnexion</button>

            </div>
        )
    }
    resetActive = (user, table, salle) => {
        this.props.selectUser(user)
        this.props.selectSalle(salle)
        this.props.selectTable(table)
        browserHistory.push('connection')
    }

}


const mapStateToProps = (state) => {
    return {
        user: state.activeUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectUser: selectUser, selectSalle: selectSalle, selectTable: selectTable }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoCompte)
