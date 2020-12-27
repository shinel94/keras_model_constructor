import * as actionTypes from './actions'
import { updateState } from "../../utility/function";


const initailState = {
    layers: [],
    save_type: 'keras',
    result: 'before'
}

const save_model = (state) => {

    let now_result = 'start'
    fetch('http://localhost:8000/save', {
        method: 'POST',
        body: JSON.stringify({ layer: state.layers })
    }).then(
        response => response.json()
    ).then(response => {
        now_result = 'success'
    }).catch(error => {
        now_result = 'fail'
    })
    return updateState(state, {result: now_result})
}

const reducer = (state=initailState, action) => {
    switch (action.type){
        case actionTypes.ADD_LAYER:
            const layer = {
                id: state.layers.length.toString() + '_' + action.layer.name,
                ...action.layer
            }
            const added_layers = state.layers.concat(layer)
            return updateState(state, {layers: added_layers})
        case actionTypes.REMOVE_LAYER:
            const removed_layers = state.layers.filter(layer => layer.id !== action.id)
            return updateState(state, {layers: removed_layers})
        case actionTypes.SAVE_MODEL:
            return save_model(state)
        default:
            return state
    }
}

export default reducer