import React, { Component } from 'react';
import { connect } from 'react-redux';

class CityBanner extends Component {
    renderBanner(){
        var cityName = this.props.selected.city.name;
        var updateTime = this.props.selected.time.s;
        return (
            <div id='cityDetail'>
                <h2 className='cityBannerName'>{cityName}</h2>
                <div className='cityBannerTime'>최근 데이터가 갱신된 시간 : {updateTime}</div>
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