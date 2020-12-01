import * as actionsTypes from './actions'

const initialState = {
    filters: 0,
    activation: 'linear',
    size: 0,
    stride: 0
}

const updateState = (oldState, updateValue) => {
    return {
        ...oldState,
        ...updateValue
    }
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        case actionsTypes.ACTIVATION_CHANGE:
            return updateState(state, {activation: action.activation})
        case actionsTypes.FILTER_CHANGE:
            return updateState(state, {filters:action.filters})
        case actionsTypes.SIZE_CHANGE:
            return updateState(state, {size:action.size})
        case actionsTypes.STRIDE_CHANGE:
            return updateState(state, {stride:action.stride})
        default:
            return state
    }
}

export default reducer

