import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/layers/gap/actions'
import { ADD_LAYER } from '../../../store/Model/actions'

class GAP extends Component {
    render() {
        return (
            <div style={{margin: '3px'}}>
                <button onClick={() => this.props.addLayerHandler({name: 'GAP', axis: this.props.axis})}> GAPLayer </button> poolingAxis :
                <input style={{border: '1px solid', margin: '5px'}} type={'number'} placeholder={'Axis'} value={this.props.axis} onChange={(event) => this.props.axisChangeHandler(event.target.value)}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        axis: state.gap.axis
    }
}

const mapDispatchToProps = dispatch => {
    return {
        axisChangeHandler: (axis) => dispatch({type:actionTypes.AXIS_CHANGE,axis:axis}),
        addLayerHandler: (layer) => dispatch({type:ADD_LAYER, layer:layer})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GAP)