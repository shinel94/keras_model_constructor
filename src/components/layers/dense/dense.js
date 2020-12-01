import React, { Component } from 'react'
import { activation_list } from '../../../store/activation/activation'
import { connect } from 'react-redux'
import * as actionsType from '../../../store/layers/dense/actions'
import { ADD_LAYER } from '../../../store/Model/actions'

class Dense extends Component{
    render() {
        let canAdd = this.props.layers.length !== 0
        if (canAdd){
            const last_layer_name = this.props.layers[this.props.layers.length - 1].name;
            canAdd = last_layer_name === 'GAP' || last_layer_name === 'Dense'
        }
        return (
            <div style={{margin: '3px'}}>
                <button disabled={!canAdd} onClick={() => this.props.addLayerHandler({name: 'Dense', unit: this.props.unit, activation: this.props.activation})}> DenseLayer </button> NodeNumber :
                <input style={{border: '1px solid', margin: '5px'}} type={'number'} placeholder={'Hidden node / Unit Number'} value={this.props.unit} onChange={(event) => this.props.nodeChangeHandler(event.target.value)}/>
                Activation :
                <select style={{border: '1px solid', margin: '5px'}} onChange={(event) => this.props.activationChangeHandler(event.target.value)} value={this.props.activation}>
                    {activation_list.map(activation => (<option key={activation} value={activation}>{activation}</option>))}
                </select>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        unit: state.dense.unit,
        activation: state.dense.activation,
        layers: state.model.layers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        nodeChangeHandler: (node) => dispatch({type:actionsType.NODE_CHANGE, node:node}),
        activationChangeHandler: (activation) => dispatch({type:actionsType.ACTIVATION_CHANGE, node:activation}),
        addLayerHandler: (layer) => dispatch({type:ADD_LAYER, layer:layer})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dense)