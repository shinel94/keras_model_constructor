import React, { Component } from 'react';
import InputLayer from "../../components/layers/input/input";
import Dense from "../../components/layers/dense/dense";
import Conv2D from "../../components/layers/conv2d/conv2d";
import Deconv2D from "../../components/layers/deconv2d/deconv2d";
import GAP from "../../components/layers/gap/gap";
import Model from "../../components/model/model";

class ModelBuilder extends Component{

    render(){
        return (
            <div>
                <InputLayer/>
                <Dense/>
                <Conv2D/>
                <Deconv2D/>
                <GAP/>
                <rect>
                    <Model/>
                </rect>
            </div>
        )
    }
}

export default ModelBuilder