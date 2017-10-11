import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, browserHistory } from 'react-router'
import { selectUser, selectSalle, selectTable } from '../actions/index'
import Modal from './modal'
import Connection from './connection'

class InfoCompte extends Component {

    render() {
        const { user } = this.props

        if (!user) {
            return (
                <div>
                   <Link to='connection'><button type="button" className="btn btn-secondary" onClick = {() => this._onButtonClick} >Connexion</button></Link>
                    <Link to='inscription'><button type="button" className="btn btn-secondary">Inscription</button></Link>
                </div>
            )
        }
        return (
            <div>

                <div key={user.lastname}>Bonjour {user.firstname}</div>
                <Link to='connection'><button type="button" className="btn btn-secondary" onClick={() => this.resetActive()}>Déconnexion</button></Link>

            </div>
        )
    }
    resetActive = () => {
        this.props.selectUser(null)
        this.props.selectSalle(null)
        this.props.selectTable(null)
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
