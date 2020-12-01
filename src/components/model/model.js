import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/Model/actions'

class Model extends Component{

    render() {
        let layers = this.props.layers.map(layer => (<div onClick={() => this.props.removeLayerHandler(layer.id)}>{layer.name}</div>))
        return (
            <div>
                ModelShow
                {layers}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        layers: state.model.layers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeLayerHandler: (id) => dispatch({type:actionTypes.REMOVE_LAYER, id:id})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Model)