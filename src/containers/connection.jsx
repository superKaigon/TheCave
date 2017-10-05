import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form'
import {selectUser} from '../actions/index'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { SubmissionError } from 'redux-form'
import {browserHistory} from 'react-router'

const formConfig = {
    form:'connctionFrom',
    fields: ['identifiant', 'password'],
    validate: validate

}
const renderField = ({ input, label, type, meta: { touched, error } }) =>
<div>
  <label>
    {label}
  </label>
  <div>
    <input {...input} placeholder={label} type={type} />
    {touched &&
      error &&
      <span>
        {error}
      </span>}
  </div>
</div>


class Connection extends Component {
  render () {
    const {error, fields : {identifiant, password}, handleSubmit, fields} = this.props
    return (
      
      <form onSubmit={handleSubmit(this.selectUser.bind(this))}>
        <Field 
        label = 'firstname' 
        type = 'text'
        component = {renderField}
        name = 'firstname'/>
        <Field 
        label = 'password' 
        type = 'text'
        component = {renderField}
        name = 'password'/>
        <button type="submit"  className="btn btn-primary" disabled={this.props.invalid}>Connexion</button>  

      </form>
    )
  }
  selectUser (values) {
    const user = this.props.users.filter((user) => {
      if (user.firstname == values.firstname && user.password == values.password) {
        this.props.selectUser(user)
        browserHistory.push('/')
      }
    })
  }

}

function validate (values) {
  const errors = {}
   if(!values.firstname ){
        errors.firstname = "L'identifiant est requis"
    }
     if(!values.password ){
        errors.password = "Le mot de passe est requise"
    }
    return errors;

}



const mapStateToProps = (state) => {
    return {
        users : state.users,
        myUser : state.activeUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators ({selectUser:selectUser}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(formConfig)(Connection))