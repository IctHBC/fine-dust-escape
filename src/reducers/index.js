import { combineReducers } from 'redux';
import WeatherReducer from './weather_reducer';

import selected from './selected_reducer';
import ForecastReducer from './forecast_reducer';

const rootReducer = combineReducers({
    weather: WeatherReducer,
    selected,
    forecast : ForecastReducer
});

export default rootReducer;