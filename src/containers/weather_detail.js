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

class WeatherDetail extends Component {
    renderDetail(){
        // var url = String(this.props.selected.city.url);
        // var suburl = url.substr(23);
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
                    <div className='col'>
                        <GoogleMap lat={this.props.selected.city.geo[0]} lng={this.props.selected.city.geo[1]}/>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
        );
    }

    renderImg(){
        var src = selectEmoji(this.props.selected.aqi)
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-2'>
                        <img src={src} alt='emoji' class='emoji'/>
                    </div>
                    <div className='col-8'>
                        {this.props.selected.city.name} is {evaluateAir(this.props.selected.aqi)} now!
                    </div>
                </div>
                <br/>
                <br/>
            </div>
        );
    }

    render(){
        if(!this.props.selected){
            return (
                <div>
                    <br/> There is No city selected now <br/>
                    Please click city name if you want more information <br/> <br/>
                </div>
            );
        }
        return (
            <div>
                {this.renderDetail()}
                <br/>
                {this.renderImg()}
                {this.renderMap()}
            </div>
        );
    }
}

function mapStateToProps({selected}){
    return {
        selected: selected
    };
}

export default connect(mapStateToProps)(WeatherDetail);