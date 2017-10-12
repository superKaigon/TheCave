import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectTable } from '../actions/index'

class LocationList extends Component {

    render() {
        const { salle } = this.props
        console.log(this.props.salle.tables)
        return (
            <div className='col-md-12'>
                {
                    this.props.salle.tables.map((table) => {
                        return (
                            <div className='col-md-6'>
                                <ul className='TableList animated fadeInRight'>
                                    <li key={table.name}>
                                        <button
                                            className='btn btn-secondary'
                                            onClick={() => this.selectTable(table)}
                                            disabled={table.occuped == true || this.props.myTable != null}>
                                            {table.name}
                                            <img src={salle.image} />
                                        </button>
                                        <button
                                            className='btn btn-secondary'
                                            onClick={() => this.unselectTable(table)}
                                            disabled={table.occuped == false}>
                                            Quitter la table
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>

        )

    }


    selectTable(table) {
        this.props.salle.tables[table.id - 1].occuped = true
        this.props.selectTable(table)
    }
    unselectTable(table) {
        this.props.salle.tables[table.id - 1].occuped = false
        this.props.selectTable(null) 
    }
}

const mapStateToProps = (state) => {
    return {
        mySalles: state.salles,
        salle: state.activeSalle,
        myTable: state.activeTable
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectTable: selectTable }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(LocationList)

