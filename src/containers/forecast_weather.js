import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { fetchForecast } from '../actions/index';

import Chart from '../components/chart';


class ForecastWeather extends Component {

    constructor(props){
        super(props);
        this.state = {
            btnClicked: false
        };
    }

    handleClick(){
        const clicked = this.state.btnClicked;
        if(!clicked){
            this.setState({
                btnClicked: true
            });
        } else {
            this.setState({
                btnClicked: false
            });
        }
    }

    renderForecast(){
        if (!this.props.forecast || !this.props.forecast.data || !this.props.forecast.data[0] || !this.props.forecast.data[0].list) {
            return (<div><br/></div>);
        }
        var w = this.props.forecast.data[0].list[0]
        var cityName = this.props.selected.city.name;
        var c = Math.round(this.props.forecast.data[0].list[0].main.temp - 273.15, 1);
        return (
            <div className='forecast'>
                <br/>
                <h4> {cityName}의 오늘의 날씨 : {c} &#x2103; </h4> 
                지금 &nbsp; <span className='info'> {w.weather[0].description}</span> &nbsp;인 상황입니다. <br/>
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
                <Chart data={temps} color='orange' units='&#x2103;' discript='temperature'/>
                <Chart data={pressures} color='green' units='hPa' discript='pressures'/>
                <Chart data={humidities} color='black' units='%' discript='humidities'/>
            </div>
        );
    }

    render(){
       if(!this.props.selected){
           return(
               <div></div>
           );
       }

       const myStatus = this.state.btnClicked;
       if(myStatus){
           return (
               <div>
                   {this.renderForecast()}
                   <br/>
                   <button type='button' 
                        className='btn btn-light'
                        onClick={() => this.handleClick()}>
                        날씨 차트 보기
                    </button>
                   {this.renderChart()}
                   <br/>
               </div>
           );
       } else {
           return (
                <div>
                    {this.renderForecast()}
                    <br/>
                    <button type='button' 
                        className='btn btn-light'
                        onClick={() => this.handleClick()}>
                        날씨 차트 보기
                    </button>
                    <br/>
                </div>
           )
       }
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