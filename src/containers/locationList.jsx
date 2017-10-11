import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectTable } from '../actions/index'

class LocationList extends Component {

    render() {
        console.log(this.props.myTables)
        return (
            <ul className='col-md-3'>
                {
                    this.props.myTables.map((table) => {
                        return (
                            <li key={table.name}><button
                                className='col-md-4 btn btn-secondary'
                                onClick={() => this.selectTable(table)}
                                disabled={table.occuped == true}>
                                {table.name}
                            </button>
                            </li>
                        )
                    })
                }

            </ul>
        )

    }


    selectTable(table) {
        this.props.myTables[table.id - 1].occuped = true
        this.setState((tables, myTables) => {
            return { tables: myTables }
        })
        this.props.selectTable(table)
        if (!this.props.myTables.filter((table) => {
            if (table.occuped == false) {
                return table
            }
        })) {
            this.props.mySalles.full = true
            this.setState((salles, mySalles) => {
                return {salles: mySalles}
            })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        myTables: state.tables, 
        mySalles: state.salles
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectTable: selectTable }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(LocationList)

