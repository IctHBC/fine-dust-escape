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
                            <th>AQI</th>
                            <th>Air Pollution Level</th>
                            <th>Cautionary Statement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr bgcolor='LightGreen'>
                            <td>0 - 50</td>
                            <td>Good</td>
                            <td>None</td>
                        </tr>
                        <tr bgcolor='Gold'>
                            <td>51-100</td>
                            <td>Moderate</td>
                            <td>Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.</td>
                        </tr>
                        <tr bgcolor='Coral'>
                            <td>101-150</td>
                            <td>Little Unhealthy</td>
                            <td>Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.</td>
                        </tr>
                        <tr bgcolor='Crimson'>
                            <td>151-200</td>
                            <td>Unhealthy</td>
                            <td>Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion</td>
                        </tr>
                        <tr bgcolor='DarkMagenta'>
                            <td>201-300</td>
                            <td>Very Unhealthy</td>
                            <td>Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.</td>
                        </tr>
                        <tr bgcolor='DarkRed'>
                            <td>300+</td>
                            <td>Hazardous</td>
                            <td>Everyone should avoid all outdoor exertion</td>
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
                        want more info
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
                        want more info
                    </button>
                </div>
            );
        }
    }
}

export default InfoTable;