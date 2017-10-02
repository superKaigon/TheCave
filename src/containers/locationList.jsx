import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {selectTable} from '../actions/index'

class LocationList extends Component {
    render() {return (
            <ul className='col-md-3'>
                {
                    this.props.myTables.map((table) => {
                        return (
                            <li key={table.name}><button className='col-md-4 btn btn-secondary' onClick={() => this.props.selectTable(table)}>{table.name}</button></li>
                        )
                    })
                }

            </ul>
        )
       
    }
}

const mapStateToProps = (state) => {
    return {
        myTables: state.tables
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({selectTable:selectTable}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationList)

