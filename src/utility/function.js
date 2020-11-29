export const updateState = (oldState, updateValue) => {
    return {
        ...oldState,
        ...updateValue
    }
}
