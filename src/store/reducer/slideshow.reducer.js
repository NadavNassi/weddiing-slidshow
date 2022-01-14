const initialState = {
    selectedImgs: [],
}
export const sliideshowReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SELECTED':
            return { ...state, selectedImgs: action.selectedImgs }
        default:
            return state
    }
}