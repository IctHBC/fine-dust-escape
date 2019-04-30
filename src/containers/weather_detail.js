import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherDetail extends Component {
    renderDetail(){
        return(
            <div>
                {this.props.selected.city.name} selected <br/>
                <br/>
                aqi : {this.props.selected.aqi}<br/>
                lat : {this.props.selected.city.geo[0]}<br/>
                lng : {this.props.selected.city.geo[1]}<br/>
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