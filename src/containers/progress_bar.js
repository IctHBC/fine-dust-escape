import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProgressBar extends Component {
    renderProgressBar(){
        const aqi = this.props.selected.aqi;
        return (
            <div className='aqivalue'>
                <h5>AQI : {aqi} </h5>
                <div className='bar'>
                    <span className='aqiIdx'> 0 </span>
                    <progress value={aqi} max='350' className='progress-bar' />
                    <span className='aqiIdx'> 350 </span>
                </div>
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