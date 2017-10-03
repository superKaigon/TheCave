import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router'


class InfoCompte extends Component {
    
    render() {
        console.log(this.currentModal)
        const { user } = this.props
        const {currentModal} = this.props
        if (!user) {
            return (
                <div>
                    <Link to='/connection'><button type="button" className="btn btn-secondary">Connexion</button></Link>
                    <button type="button" className="btn btn-secondary">Inscription</button>
                </div>
            )
        }
        return (
            <div>

                <div key={user.lastname}>Bonjour {user.firstname}</div>

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
