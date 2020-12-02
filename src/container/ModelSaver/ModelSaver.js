import React, { Component } from 'react';
import { connect } from 'react-redux';
import Model from "../../components/model/model";


class ModelSaver extends Component {
    render(){
        return (
            <div>
                <div> Model Saver </div>
                <Model/>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModelSaver)