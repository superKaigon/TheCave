import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectSalle, selectTable } from '../actions/index'



class OngletsSalle extends Component {
    render() {
        return (
            <nav className='row'>

                <div className='col-md-12'>
                    {
                        this.props.mySalles.map((salle) => {
                            return (
                                <button className='col-md-4 btn btn-secondary'
                                    key={salle.id}
                                    onClick={() => this.selectSalle(salle)}
                                    disabled = {salle.full == true}>
                                    Salle {salle.id}
                                </button>
                            )
                        })
                    }

                </div>
            </nav>
        )
    }
    selectSalle (salle) {
        this.props.selectSalle(salle),
        this.props.selectTable(null)
    }

}

const mapStateToProps = (state) => {
    return {
        mySalles: state.salles
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectSalle: selectSalle, selectTable:selectTable }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OngletsSalle)