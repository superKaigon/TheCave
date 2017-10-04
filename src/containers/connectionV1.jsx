import React, { Component } from 'react'
import { connect } from 'react-redux'
import {selectUser} from '../actions/index'
import {bindActionCreators} from 'redux'


class Connection extends Component {
    render() {
        const {users} = this.props
        const values = 'Gerard'
        console.log(values)
        const user = users.filter((user) => {
            if(user.firstname == values){
                return user   
            }
            
        })
        console.log(users)
        console.log(user[0].firstname)
        
       
        return (
            <div>
                
            </div>
        )
    }

            
       
    
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
    


export default connect(mapStateToProps, mapDispatchToProps)(Connection)