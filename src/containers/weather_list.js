import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectCity, fetchForecast } from '../actions';
import { bindActionCreators } from 'redux';

// import GoogleMap from '../components/google_map';
// import Chart from '../components/chart';

function evaluateAir(aqi){
    if(aqi<=50){ return 'Good';} 
    else if (aqi<=100){ return 'Moderate'; } 
    else if (aqi<=150){ return 'Little Unhealthy'; } 
    else if (aqi<=200){ return 'Unhealthy';} 
    else if (aqi<=300){ return 'Very Unhealthy';} 
    else { return 'Hazardous'; }
}

function getBgColor(aqi){
    if(aqi<=50){ return 'LightGreen';} 
    else if (aqi<=100){ return 'Gold';} 
    else if (aqi<=150){ return 'Coral';} 
    else if (aqi<=200){ return 'Crimson';} 
    else if (aqi<=300){ return 'DarkMagenta';} 
    else { return 'DarkRed';}
}

class WeatherList extends Component {
   renderWeather({data}){
        console.log("DATA", data);
        const clsName = (data.aqi) > 150 ? 'whiteTable' : 'blackTable';
        return (
            <tr
                onClick={() => {
                    console.log("casdas", this);
                    this.props.selectCity(data);
                    var cityInUrl = String(data.city.url).substr(23);
                    this.props.fetchForecast(cityInUrl);
                }}
                key = {data.idx}
            >
                <td>{data.city.name}</td>
                <td>{data.aqi}</td>
                <td bgcolor={getBgColor(data.aqi)} className={clsName}>{evaluateAir(data.aqi)}</td>
            </tr>
        );
    }

    // clear table 
    handleClick(){ 
        window.location.reload();
        console.log('RemovedWeatherData', this.props.weather);
    }

    render(){
        console.log('weatherData', this.props.weather);
        return (
            <div className='weather-list'>
                미세먼지 데이터를 초기화 하고 싶으시면 클릭해주세요. &nbsp; <i class="fas fa-arrow-right"></i> &nbsp; &nbsp;
                <button type='button' 
                    className='btn btn-light'
                    onClick={() => this.handleClick()}>
                    테이블 초기화
                </button>
                <br/><br/>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>도시 이름</th>
                            <th>aqi 지수</th>
                            <th>상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather.bind(this))}
                    </tbody>
                </table>
                <br/>
                <br/>
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
    return bindActionCreators({selectCity, fetchForecast}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);