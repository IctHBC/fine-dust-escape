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

// weather forecast api 

const ROOT_FORECAST_URL = 'http://api.openweathermap.org/data/2.5/forecast'
const FORECAST_KEY = '6c81f1f9027dac214c8c62acb5ca5b83';

export const FETCH_FORECAST = 'FETCH_FORECAST';

export function fetchForecast(value){
    const forecastUrl = `${ROOT_FORECAST_URL}?q=${value}&appid=${FORECAST_KEY}`;
    const forecastRequest = axios.get(forecastUrl);

    return {
        type: FETCH_FORECAST,
        payload: forecastRequest
    };
}