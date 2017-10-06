import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link,browserHistory} from 'react-router'

const defaultState = { data: null, error: null };

class InfoCompte extends Component {
    initialize = () => {
       this.setState(this.activeUser = {})
       browserHistory.push('connection')

    }
    
    render() {
        const { user } = this.props
        if (!user) {
            return (
                <div>
                    <Link to='connection'><button type="button" className="btn btn-secondary">Connexion</button></Link>
                    <Link to ='inscription'><button type="button" className="btn btn-secondary">Inscription</button></Link>
                </div>
            )
        }
        return (
            <div>

                <div key={user.lastname}>Bonjour {user.firstname}</div>
                <button type="button" className="btn btn-secondary" onClick={this.initialize}>Déconnexion</button>

            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        user: state.activeUser,
    }
}

export default connect(mapStateToProps)(InfoCompte)
