import * as actionsTypes from './actions'

const initialState = {
    unit: 0,
    activation: 'linear'
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
        case actionsTypes.NODE_CHANGE:
            return updateState(state, {unit:action.node})
        default:
            return state
    }
}

export default reducer

