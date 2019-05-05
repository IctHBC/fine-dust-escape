import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { fetchForecast } from '../actions/index';

import Chart from '../components/chart';


class ForecastWeather extends Component {
    renderForecast(){
        if (!this.props.forecast || !this.props.forecast.data || !this.props.forecast.data[0] || !this.props.forecast.data[0].list) {
            return (<div><br/></div>);
        }
        var w = this.props.forecast.data[0].list[0]
        var cityName = this.props.selected.city.name;
        return (
            <div>
                <br/>
                <h4> today's weather in {cityName} </h4>
                weather main : {w.weather[0].main} <br/>
                weather description : {w.weather[0].description} <br/>
            </div>
        );
    }

    renderChart(){
        if (!this.props.forecast || !this.props.forecast.data || !this.props.forecast.data[0] || !this.props.forecast.data[0].list) {
            return (<div><br/></div>);
        }
        const listdata = this.props.forecast.data;

        const temps = [];
        const pressures = [];
        const humidities = [];
        
        for (var i=0; i<40; i++){
            temps.push(Math.round(listdata[0].list[i].main.temp - 273.15, 1));
            pressures.push(listdata[0].list[i].main.pressure);
            humidities.push(listdata[0].list[i].main.humidity);
        }

        return (
            <div>
                <Chart data={temps} color='orange' units='&#x2103;'/>
                <Chart data={pressures} color='green' units='hPa'/>
                <Chart data={humidities} color='black' units='%'/>
            </div>
        );
    }

    render(){
       if(!this.props.selected){
           return(
               <div></div>
           );
       }
       return (
           <div>
               {this.renderForecast()}
               {this.renderChart()}
           </div>
       );
    }
}

function mapStateToProps({selected, forecast}){
    return {
        selected: selected,
        forecast: forecast,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchForecast } , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastWeather);