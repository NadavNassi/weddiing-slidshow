const initialState = {
    imgs: [],
}
export const sliideshowReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return { ...state, imgs: action.data }
        case 'ADD_IMG':
            return { ...state, imgs: [...state.imgs, action.img] }
        case 'SET_CURRENT':
            const currWeed = state.cannabis.find(canna => canna.id === +action.data)
            return { ...state, currCannabis: currWeed }
        case 'REMOVE_ITEM':
            const items = state.cannabis.filter(item => item.id !== +action.data)
            return { ...state, cannabis: items, currCannabis: null }
        default:
            return state
    }
}