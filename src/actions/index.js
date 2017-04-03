import axios from 'axios'

const API_KEY = '4142c06d0b9d12d85230ec31c1445554'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

// Creating a common variable between action and reducer to avoid typos
// Consistency between locations
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`
    const request = axios.get(url)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}