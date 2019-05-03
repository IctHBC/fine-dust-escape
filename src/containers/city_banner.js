import React, { Component } from 'react';
import { connect } from 'react-redux';

class CityBanner extends Component {
    renderBanner(){
        var cityName = this.props.selected.city.name;
        var updateTime = this.props.selected.time.s;
        return (
            <div id='cityDetail'>
                <h2>{cityName}</h2>
                recently updated time : {updateTime}
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
                {this.renderBanner()}
            </div>
        )
    }
}

function mapStateToProps({selected}){
    return {
        selected: selected
    };
}

export default connect(mapStateToProps)(CityBanner);