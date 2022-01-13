import { cannabisService } from "../../services/cannabis.service"



export function loadCannabis() {
    return async dispatch => {
        const res = await cannabisService.fetchData()
        dispatch({ type: 'SET_DATA', data: res })
    }
}

export function getById(id) {
    return async dispatch => {
        dispatch({ type: 'SET_CURRENT', data: id })
    }
}

export function removeById(id) {
    return async dispatch => {
        dispatch({ type: 'REMOVE_ITEM', data: id })
    }
}