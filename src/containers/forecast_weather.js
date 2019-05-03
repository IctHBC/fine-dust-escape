import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { fetchForecast } from '../actions/index';

class ForecastWeather extends Component {
    renderForecast(){
        if (!this.props.forecast || !this.props.forecast.data || !this.props.forecast.data[0] || !this.props.forecast.data[0].list) {
            return (<div>No info</div>);
        }
        var w = this.props.forecast.data[0].list[0]
        return (
            <div>
                weather main : {w.weather[0].main} <br/>
                weather description : {w.weather[0].description} <br/>
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
           </div>
       )
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