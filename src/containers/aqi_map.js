import React, { Component } from 'react';
import { connect } from 'react-redux';

import GoogleMap from '../components/google_map';

class AqiMap extends Component {
    renderMap(){
        return (
            <div className='col googleMap'>
                <GoogleMap className='aqiMap' lat={this.props.selected.city.geo[0]} lng={this.props.selected.city.geo[1]}/>
            </div>
        );
    }

    render(){
        if(!this.props.selected){
            return (
                <div></div>
            );
        }
        return (
            <div>
                {this.renderMap()}
            </div>
        )
    }
}

function mapStateToProps({selected}){
    return {
        selected: selected,
    };
}

export default connect(mapStateToProps)(AqiMap);