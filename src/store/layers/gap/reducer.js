import * as actionsTypes from './actions'

const initialState = {
    axis: -1
}

const updateState = (oldState, updateValue) => {
    return {
        ...oldState,
        ...updateValue
    }
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        case actionsTypes.AXIS_CHANGE:
            return updateState(state, {axis: action.axis})
        default:
            return state
    }
}

export default reducer

