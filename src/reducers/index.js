import { combineReducers } from 'redux';
import WeatherReducer from './weather_reducer';
import selected from './selected_reducer';

const rootReducer = combineReducers({
    weather: WeatherReducer,
    selected
});

export default rootReducer;