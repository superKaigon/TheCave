import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectSalle } from '../actions/index'



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
                                    onClick={() => this.props.selectSalle(salle)}
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

}

const mapStateToProps = (state) => {
    return {
        mySalles: state.salles
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ selectSalle: selectSalle }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OngletsSalle)