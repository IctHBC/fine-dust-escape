import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectCity } from '../actions';
import { bindActionCreators } from 'redux';

// import GoogleMap from '../components/google_map';
// import Chart from '../components/chart';

function evaluateAir(aqi){
    if(aqi<=50){
        return '좋음';
    } else if (aqi<=100){
        return '보통';
    } else if (aqi<=150){
        return '민감군영향';
    } else if (aqi<=200){
        return '매우나쁨';
    } else if (aqi<=300){
        return '나쁨';
    } else {
        return '위험';
    }
}

function getBgColor(aqi){
    if(aqi<=50){
        return 'LightGreen';
    } else if (aqi<=100){
        return 'Gold';
    } else if (aqi<=150){
        return 'Coral';
    } else if (aqi<=200){
        return 'Crimson';
    } else if (aqi<=300){
        return 'DarkMagenta';
    } else {
        return 'DarkRed';
    }
}

class WeatherList extends Component {

    renderWeather({data}){
        return (
            <tr
                
            >
                <td>{data.city.name}</td>
                <td>{data.aqi}</td>
                <td bgcolor={getBgColor(data.aqi)}>{evaluateAir(data.aqi)}</td>
            </tr>
        );
    }
    handleError(){
        if(this.props.error){
           return (
                <div className='alert alert-danger' role='alert'>
                    {this.props.error.message}
                </div>
           );
        }
    }
    render(){
        return (
            <div className='weather-list'>
                {this.handleError()}
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>cityName</th>
                            <th>aqi</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state, {selected}){
    return {
        weather: state.weather.data,
        error: state.weather.error,
        selected: selected
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectCity}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);