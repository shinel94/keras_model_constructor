import React, { Component } from 'react';
import { connect } from 'react-redux';
import Model from "../../components/model/model";
import * as actionsType from "../../store/Model/actions";


class ModelSaver extends Component {

    render(){
        return (
            <div>
                <div> Model Saver </div>
                <Model/>
                <button onClick={this.props.modelSaveHandler}> Save </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        model: state.model
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        modelSaveHandler: () => dispatch({type:actionsType.SAVE_MODEL}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModelSaver)