import React, { Component } from 'react'
import { activation_list } from '../../../store/activation/activation'
import { connect } from 'react-redux'
import * as actionsType from '../../../store/layers/deconv2d/actions'
import { ADD_LAYER } from '../../../store/Model/actions'

class Deconv2D extends Component{
    render() {
        return (
            <div style={{margin: '3px'}}>
                <button onClick={() => this.props.addLayerHandler({name: 'Deconv2D', filters: this.props.filters, size: this.props.size, stride: this.props.stride, activation: this.props.activation})}> Convolution2DTransposeLayer </button> FilterNumber :
                <input style={{border: '1px solid', margin: '5px'}}
                       type={'number'}
                       placeholder={'Filters'}
                       value={this.props.filters}
                       onChange={(event) => this.props.filterChangeHandler(event.target.value)}/>
                FilterSize (n, n) :
                <input style={{border: '1px solid', margin: '5px'}}
                       type={'number'}
                       placeholder={'Filter Size'}
                       value={this.props.size}
                       onChange={(event) => this.props.sizeChangeHandler(event.target.value)}/>
                Stride (n, n) :
                <input style={{border: '1px solid', margin: '5px'}}
                       type={'number'} placeholder={'Convolution Stride'}
                       value={this.props.stride}
                       onChange={(event) => this.props.strideChangeHandler(event.target.value)}/>
                Activation :
                <select style={{border: '1px solid', margin: '5px'}}
                        onChange={(event) => this.props.activationChangeHandler(event.target.value)} value={this.props.activation}>
                    {activation_list.map(activation => (<option key={activation} value={activation}>{activation}</option>))}
                </select>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.deconv2d.filters,
        activation: state.deconv2d.activation,
        size: state.deconv2d.size,
        stride: state.deconv2d.stride
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterChangeHandler: (filters) => dispatch({type:actionsType.FILTER_CHANGE, filters:filters}),
        activationChangeHandler: (activation) => dispatch({type:actionsType.ACTIVATION_CHANGE, node:activation}),
        sizeChangeHandler: (size) => dispatch({type:actionsType.SIZE_CHANGE, size:size}),
        strideChangeHandler: (stride) => dispatch({type:actionsType.STRIDE_CHANGE, stride:stride}),
        addLayerHandler: (layer) => dispatch({type:ADD_LAYER, layer:layer})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deconv2D)