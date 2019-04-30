import axios from 'axios';

const API_KEY = '42449a98a32888268828e3059c4489aef7625391'
const ROOT_URL = 'http://api.waqi.info/feed'

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}/${city}/?token=${API_KEY}`
    const request = axios.get(url);

    return {
        type : FETCH_WEATHER,
        payload : request
    };
}

export function selectCity(city){
    return {
        type: 'CITY_SELECTED',
        payload: city
    };
}