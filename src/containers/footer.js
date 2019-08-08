import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return (
            <div className='footer'>
                <hr/>
                Likelion 해커톤 <br/> <br/>
                <div className='footerNotice'>AQI 지수란? 대기질 지수 또는 공기질 지수로 불리며 정부기관이 사용하는 수치의 하나로서 현재 공기가 얼만큼 오염되었고 앞으로 오염 정도가 어떻게 될지에 대한 예측을 가능하게 한다.
               <br/> 평가기준:아황산가스,일산화탄소,오존,이산화질소,미세먼지,초미세먼지</div>
            </div>
        );
    }
}

export default Footer;