import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/layers/input/actions'
import { ADD_LAYER } from '../../../store/Model/actions'


class InputLayer extends Component {
    render() {
        return (
            <div style={{margin: '3px'}}>
                <button onClick={() => this.props.addLayerHandler({name: 'Input', height: this.props.height, width: this.props.width, channel: this.props.channel})}> InputLayer </button> InputShape HEIGHT :
                <input style={{border: '1px solid', margin: '5px'}} type={'number'} placeholder={'Hidden node / Unit Number'} value={this.props.height} onChange={(event) => this.props.heightChangeHandler(event.target.value)}/>
                WIDTH :
                <input style={{border: '1px solid', margin: '5px'}} type={'number'} placeholder={'Hidden node / Unit Number'} value={this.props.width} onChange={(event) => this.props.widthChangeHandler(event.target.value)}/>
                CHANNEL :
                <input style={{border: '1px solid', margin: '5px'}} type={'number'} placeholder={'Hidden node / Unit Number'} value={this.props.channel} onChange={(event) => this.props.channelChangeHandler(event.target.value)}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        height: state.input.height,
        width: state.input.width,
        channel: state.input.channel
    }
}

const mapDispatchToProps = dispatch => {
    return {
        heightChangeHandler: (height) => dispatch({type:actionTypes.HEIGHT_CHANGE, height:height}),
        widthChangeHandler: (width) => dispatch({type:actionTypes.WIDTH_CHANGE, width:width}),
        channelChangeHandler: (channel) => dispatch({type:actionTypes.CHANNEL_CHANGE, channel:channel}),
        addLayerHandler: (layer) => dispatch({type:ADD_LAYER, layer:layer})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputLayer)