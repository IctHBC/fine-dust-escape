import React, { Component } from 'react';

class InfoTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            btnClicked: false
        };
    }

    handleClick(){
        const clicked = this.state.btnClicked;
        if(!clicked){
            this.setState({
                btnClicked: true
            });
        } else {
            this.setState({
                btnClicked: false
            })
        };
    }

    renderTable(){
        return(
            <table className='table'>
                    <thead>
                        <tr>
                            <th>AQI 지수</th>
                            <th>대기 오염 수준</th>
                            <th>주의 사항</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr bgcolor='LightGreen'>
                            <td>0 - 50</td>
                            <td>Good(좋음)</td>
                            <td>없음</td>
                        </tr>
                        <tr bgcolor='Gold'>
                            <td>51-100</td>
                            <td>Moderate(보통)</td>
                            <td>환자군에게 만성 노출시 경미한 영향이 유발될 수 있는 수준</td>
                        </tr>
                        <tr bgcolor='Coral'>
                            <td>101-150</td>
                            <td>Little Unhealthy(조금 나쁨)</td>
                            <td>환자군 및 민감군에게 유해한 영향이 유발될 수 있는 수준</td>
                        </tr>
                        <tr bgcolor='Crimson' className='whiteTable'>
                            <td>151-200</td>
                            <td>Unhealthy(나쁨)</td>
                            <td>환자군 및 민감군(어린이, 노약자 등)에게 유해한 영향 유발, 일반인도 건강상 불쾌감을 경험할 수 있는 수준</td>
                        </tr>
                        <tr bgcolor='DarkMagenta' className='whiteTable'>
                            <td>201-300</td>
                            <td>Very Unhealthy(매우 나쁨)</td>
                            <td>환자군 및 민감군에게 급성 노출시 심각한 영향 유발, 일반인도 약한 영향이 유발될 수 있는 수준</td>
                        </tr>
                        <tr bgcolor='DarkRed' className='whiteTable'>
                            <td>300+</td>
                            <td>Hazardous(위험지역)</td>
                            <td>환자군 및 민감군에게 응급 조치가 발생되거나, 일반인에게 유해한 영향이 유발될 수 있는 수준</td>
                        </tr>
                    </tbody>
                </table>
        );
    }

    render(){
        const myStatus = this.state.btnClicked;
        console.log('status', myStatus);

        if(myStatus){
            return (
                <div>
                    <button type='button' 
                        className='btn btn-light'
                        onClick={() => this.handleClick()}>
                    미세먼지 기준표
                    </button>
                    <br/>
                    <br/>
                    {this.renderTable()}
                </div>
            );
        } else {
            return (
                <div>
                    <button type='button' 
                        className='btn btn-light'
                        onClick={() => this.handleClick()}>
                        미세먼지 기준표
                    </button>
                </div>
            );
        }
    }
}

export default InfoTable;