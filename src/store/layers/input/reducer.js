import * as actionsTypes from './actions'

const initialState = {
    height: 0,
    width: 0,
    channel: 0
}

const updateState = (oldState, updateValue) => {
    return {
        ...oldState,
        ...updateValue
    }
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        case actionsTypes.HEIGHT_CHANGE:
            return updateState(state, {height: action.height})
        case actionsTypes.WIDTH_CHANGE:
            return updateState(state, {width: action.width})
        case actionsTypes.CHANNEL_CHANGE:
            return updateState(state, {channel: action.channel})
        default:
            return state
    }
}

export default reducer

