import React, { Component } from 'react';
import { connect } from 'react-redux';

import GoogleMap from '../components/google_map';

// import image files 
import good from '../images/good.png';
import moderate from '../images/moderate.png';
import little_unhealthy from '../images/little_unhealthy.png';
import unhealthy from '../images/unhealthy.png';
import very_unhealthy from '../images/unhealthy.png';
import hazardous from '../images/hazardous.png';

import { bindActionCreators } from 'redux';
import { fetchForecast } from '../actions/index'

// select emoji image
function selectEmoji(aqi){
    if(aqi<=50){
        return good;
    } else if (aqi<=100){
        return moderate;
    } else if (aqi<=150){
        return little_unhealthy;
    } else if (aqi<=200){
        return unhealthy;
    } else if (aqi<=300){
        return very_unhealthy;
    } else {
        return hazardous;
    }
}

// air description 
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

// air implications 
function implications(aqi){
    if(aqi<=50){
        return 'Air quality is considered satisfactory, and air pollution poses little or no risk';
    } else if (aqi<=100){
        return 'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.';
    } else if (aqi<=150){
        return 'Members of sensitive groups may experience health effects. The general public is not likely to be affected.';
    } else if (aqi<=200){
        return 'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects';
    } else if (aqi<=300){
        return 'Health warnings of emergency conditions. The entire population is more likely to be affected.';
    } else {
        return 'Health alert: everyone may experience more serious health effects';
    }
}

class WeatherDetail extends Component {
    renderDetail(){
        return(
            <div id='cityDetail'>
                <h2>{this.props.selected.city.name}<br/></h2>
                recently updated time : {this.props.selected.time.s}
                <br/>
                <br/>
            </div>
        );
    }

    renderMap(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col googleMap'>
                        <GoogleMap lat={this.props.selected.city.geo[0]} lng={this.props.selected.city.geo[1]}/>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
        );
    }

    renderImgDescription(){
        var aqi = this.props.selected.aqi;
        var src = selectEmoji(aqi);
        var name = this.props.selected.city.name;
        var url = this.props.selected.city.url;
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-4 emojiContainer'>
                        <img src={src} alt='emoji' className='emoji'/>
                    </div>
                    <div className='col-8 description'>
                        {name} is {evaluateAir(aqi)} now! <br/> <br/>
                        {implications(aqi)} <br/><br/>
                        want more information : <a href={url}>{url}</a>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
        );
    }

    renderForecast(){
        console.log("FORECAST", this.props.forecast);
        if (!this.props.forecast || !this.props.forecast.data || !this.props.forecast.data[0] || !this.props.forecast.data[0].list) {
            return (<div>No info</div>);
        }
        var w = this.props.forecast.data[0].list[0]
        return (
            <div>
                {w.weather[0].main} <br/>
                {w.weather[0].description} <br/>
            </div>
        );
    }

    render(){
        if(!this.props.selected){
            return (
                <div>
                    <br/> There is NO city selected now <br/>
                    Please click city name if you want more information <br/> <br/>
                </div>
            );
        }
        return (
            <div>
                {this.renderForecast()}
                {this.renderDetail()}
                {this.renderImgDescription()}
                {this.renderMap()}
            </div>
        );
    }
}

function mapStateToProps({selected, forecast}){
    return {
        selected: selected,
        forecast: forecast,
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchForecast }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetail);