import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectCity, fetchForecast } from '../actions';
import { bindActionCreators } from 'redux';

class ErrorMessage extends Component{
    handleErorr(){
        if(this.props.error){
            return (
                <div className='alert alert-danger' role='alert'>
                    {this.props.error}
                    Make sure enter the right city <br/>
                </div>
            );
        } 
        return (
            <div></div>
        );
    }
    
    render(){
        return (
            <div>
                {this.handleErorr()}
            </div>
        );
    }
}

function mapStateToProps(state, {selected}){
    return {
        weather : state.weather.data,
        error: state.weather.error,
        selected: selected
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectCity, fetchForecast}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);