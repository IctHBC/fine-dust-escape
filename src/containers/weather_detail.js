import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherDetail extends Component {
    render(){
        if(!this.props.selected){
            return <div><br/>No City Selected<br/><br/></div>;
        }
        return (
            <div>selected</div>
        );
    }
}

function mapStateToProps({selected}){
    return {
        selected: selected
    };
}

export default connect(mapStateToProps)(WeatherDetail);