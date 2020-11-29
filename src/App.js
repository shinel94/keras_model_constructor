import './App.css';
import Dense from "./components/layers/dense/dense";
import React from 'react'
import Conv2D from "./components/layers/conv2d/conv2d";
import Deconv2D from "./components/layers/deconv2d/deconv2d";
import GAP from "./components/layers/gap/gap";
import InputLayer from "./components/layers/input/input";
import Model from "./components/model/model";

function App() {
  return (
    <div className="App">
        <InputLayer/>
        <Dense/>
        <Conv2D/>
        <Deconv2D/>
        <GAP/>
        <rect>
            <Model/>
        </rect>
    </div>
  );
}

export default App;
