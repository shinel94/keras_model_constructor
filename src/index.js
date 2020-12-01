import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import DenseReducer from "./store/layers/dense/reducer";
import Conv2DReducer from "./store/layers/conv2d/reducer"
import Deconv2DReducer from './store/layers/deconv2d/reducer'
import GAPReducer from './store/layers/gap/reducer'
import InputReducer from './store/layers/input/reducer'
import ModelReducer from './store/Model/reducer'

const rootReducer = combineReducers({
    dense: DenseReducer,
    conv2d: Conv2DReducer,
    deconv2d: Deconv2DReducer,
    gap: GAPReducer,
    input: InputReducer,
    model: ModelReducer
})

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
