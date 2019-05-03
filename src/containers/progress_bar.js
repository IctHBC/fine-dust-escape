import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProgressBar extends Component {
    renderProgressBar(){
        const aqi = this.props.selected.aqi;
        return (
            <div className='aqivalue'>
                <span className='aqiTitle'>AQI </span>
                <progress value={aqi} max='350' className='progress-bar' />
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
               <br/>
               {this.renderProgressBar()}
           </div>
       );
    }
}

function mapStateToProps({selected}){
    return {
        selected: selected
    };
}

export default connect(mapStateToProps)(ProgressBar);