import React, { Component } from 'react';
import { connect } from 'react-redux';

import GoogleMap from '../components/google_map';

class WeatherDetail extends Component {
    renderDetail(){
        return(
            <div>
                <h2>{this.props.selected.city.name}<br/></h2>
                <br/>
                aqi : {this.props.selected.aqi}
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

    render(){
        if(!this.props.selected){
            return (
                <div>
                    <br/> No city selected <br/>
                </div>
            );
        }
        return (
            <div>
                {this.renderDetail()}
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