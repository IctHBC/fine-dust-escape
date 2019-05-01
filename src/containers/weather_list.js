import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectCity } from '../actions';
import { bindActionCreators } from 'redux';

// import GoogleMap from '../components/google_map';
// import Chart from '../components/chart';

function evaluateAir(aqi){
    if(aqi<=50){
        return 'Good';
    } else if (aqi<=100){
        return 'Moderate';
    } else if (aqi<=150){
        return 'Little Unhealthy';
    } else if (aqi<=200){
        return 'Unhealthy';
    } else if (aqi<=300){
        return 'Very Unhealthy';
    } else {
        return 'Hazardous';
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
                onClick={() => {
                    console.log("casdas", this);
                    this.props.selectCity(data)
                }}
                key = {data.idx}
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
                        {this.props.weather.map(this.renderWeather.bind(this))}
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