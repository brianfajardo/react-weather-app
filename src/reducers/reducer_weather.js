import { FETCH_WEATHER } from '../actions/index'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // Always avoid mutating state!
            // Ie. state.push(action.payload.data) = bad
            // Adds new weather data as first item to the array
            return [action.payload.data, ...state]
    }
    return state
}