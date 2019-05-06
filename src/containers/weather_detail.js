import React, { Component } from 'react';
import { connect } from 'react-redux';

// import image files 
import good from '../images/good.png';
import moderate from '../images/moderate.png';
import little_unhealthy from '../images/little_unhealthy.png';
import unhealthy from '../images/unhealthy.png';
import very_unhealthy from '../images/unhealthy.png';
import hazardous from '../images/hazardous.png';

// select emoji image
function selectEmoji(aqi){
    if(aqi<=50){ return good; }
    else if (aqi<=100){ return moderate; } 
    else if (aqi<=150){ return little_unhealthy; } 
    else if (aqi<=200){ return unhealthy; }
    else if (aqi<=300){ return very_unhealthy; } 
    else { return hazardous; }
}

// air description 
function evaluateAir(aqi){
    if(aqi<=50){ return 'Good'; } 
    else if (aqi<=100){ return 'Moderate'; } 
    else if (aqi<=150){ return 'Little Unhealthy'; } 
    else if (aqi<=200){ return 'Unhealthy'; } 
    else if (aqi<=300){ return 'Very Unhealthy'; } 
    else { return 'Hazardous'; }
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
    renderImg(){
        var aqi = this.props.selected.aqi;
        var src = selectEmoji(aqi);
        return (
            <div className='col-3 emojiContainer'>
                <img src={src} alt='emoji' className='emoji'/>
            </div>
        );
    }

    renderDescription(){
        var aqi = this.props.selected.aqi;
        var cityName = this.props.selected.city.name;
        var url = this.props.selected.city.url;

        return (
            <div className='col-9 description'>
                {cityName} is <span className='info'>{evaluateAir(aqi)}</span> now! <br/> <br/>
                {implications(aqi)} <br/><br/>
                want more information <i class="fas fa-angle-double-right"></i> <a href={url}>{url}</a>
            </div>
        );
    }

    render(){
        if(!this.props.selected){
            return (
                <div className='aqiInfo'>
                    <br/> There is NO city selected now <br/>
                    Please click city name if you want more information <br/><br/>
                    <i class="fas fa-arrow-down fa-lg"/> <i class="fas fa-arrow-down fa-lg"/> <i class="fas fa-arrow-down fa-lg"/> <br/>
                </div>
            );
        }
        return (
           <div>
               <div className='container'>
                    <div className='row'>
                        {this.renderImg()}
                        {this.renderDescription()}
                    </div>
                    <br/>
                    <br/>
                </div>
           </div>
        );
    }
}

function mapStateToProps({selected}){
    return {
        selected: selected,
    };
}

export default connect(mapStateToProps)(WeatherDetail);