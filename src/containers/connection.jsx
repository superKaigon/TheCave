import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link, browserHistory } from 'react-router'
import {bindActionCreators} from "redux" 
import {connect} from "react-redux"
import {selectUser} from '../actions/index'

const formConfig = {
    form: 'Connection',
    initialValues: { identifiant: 'adresse email', password: 'mot de passe' },
    fields: ['identifiant', 'password'],
    validate: validate
}

class Connection extends Component {
    render() {
        const { error, fields: { identifiant, password }, handleSubmit, fields } = this.props
        return (
            <form onSubmit={handleSubmit(this.selectUser.bind(this))} className='default_margin_top'>
                <div>
                    <label>Identifiant</label>
                    <input className="form-control" type="text" {...fields.identifiant} />
                    <div className="text-help"></div>
                </div>
                <div>
                    <label >Mot de passe</label>
                    <input className="form-control" type="text" {...fields.password} />
                    <div className="text-help"></div>
                </div>
                <button type="submit" className="btn btn-primary" disabled={this.props.invalid}>Connexion</button>
            </form>
        )
    }

    selectUser(user) {
        this.props.selectUser(user)
        browserHistory.push('/')
    }
}

const validate = (values) => {
    const error = {}
    this.props.users.filter((user) => {
        if (value.identifiant = user.identifiant){
            return true
        }else {
            return false
        }
    })
    if (!user) {
        error.identifiant = "pas d'adresse mail correspondante"
    }
    this.props.users.filter((user) => {
        if (value.password = user.password){
            return true
        }else {
            return false
        }
    })
    if (!user) {
        error.password = 'mot de passe incorrect'
    }
    return error
    
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators ({selectUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(formConfig)(Connection))