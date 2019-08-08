import React, { Component } from 'react';
import { connect } from 'react-redux';

// import image files 
import 좋음 from '../images/good.png';
import 보통 from '../images/moderate.png';
import 조금_나쁨 from '../images/little_unhealthy.png';
import 나쁨 from '../images/unhealthy.png';
import 매우_나쁨 from '../images/unhealthy.png';
import 위험지역 from '../images/hazardous.png';

// select emoji image
function selectEmoji(aqi){
    if(aqi<=50){ return 좋음; }
    else if (aqi<=100){ return 보통; } 
    else if (aqi<=150){ return 조금_나쁨; } 
    else if (aqi<=200){ return 나쁨; }
    else if (aqi<=300){ return 매우_나쁨; } 
    else { return 위험지역; }
}

// air description 
function evaluateAir(aqi){
    if(aqi<=50){ return '좋음'; } 
    else if (aqi<=100){ return '보통'; } 
    else if (aqi<=150){ return '조금 나쁨'; } 
    else if (aqi<=200){ return '나쁨'; } 
    else if (aqi<=300){ return '매우 나쁨'; } 
    else { return '위험지역'; }
}

// air implications 
function implications(aqi){
    if(aqi<=50){
        return '공기의 질이 만족스럽고 대기 오염의 위험도는 거의/전혀 없습니다.';
    } else if (aqi<=100){
        return '공기의 질은 보통입니다. 그러나 일부 오염 물질의 경우 공기 오염에 비정상적으로 민감한 소수의 사람들에게는 건강 문제를 일으킬 수 있습니다.';
    } else if (aqi<=150){
        return '민감한 그룹의 구성원에게 건강에 영향을 줄 수 있습니다. 일반 대중은 큰 영향을 받지 않을 것입니다.';
    } else if (aqi<=200){
        return '모든 사람들의 건강에 영향을 미칠 수 있습니다. 민감한 그룹의 구성원은 더 심각한 건강상의 피해가 예상 됩니다';
    } else if (aqi<=300){
        return '건강에 대한 응급 상황 경고. 전체 인구가 심각한 건강상의 피해를 얻을 것으로 예상됩니다.';
    } else {
        return '건강 경고 : 모든 사람이 더 심각한 건강상의 피해를 경험할 것입니다.';
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
                {cityName} 은 지금 <span className='info'>{evaluateAir(aqi)}</span> 단계입니다. <br/> <br/>
                {implications(aqi)} <br/><br/>
                더 자세한 정보를 원하신다면 <i class="fas fa-angle-double-right"></i> <a href={url} target='_blank'>{url}</a>
            </div>
        );
    }

    render(){
        if(!this.props.selected){
            return (
                <div className='aqiInfo'>
                    <br/>미세먼지 정보가 알고 싶은 도시를 검색해주세요.<br/>
                     <br/>검색 후 나온 결과를 클릭하면 날씨 정보도 확인할 수 있습니다.<br/>
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