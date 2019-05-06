import _ from 'lodash';
import React from 'react';
import {
    Sparklines,
    SparklinesLine,
    SparklinesBars,
    SparklinesReferenceLine,
} from 'react-sparklines';

function avg(data){
    return _.round(_.sum(data) / data.length);
}

const Chart = (props) => {
    return (
        <div className='chartContainer'>
            <Sparklines data={props.data}>
                <SparklinesBars style={{ fill: props.color, fillOpacity: ".25" }} />
                <SparklinesLine style={{ stroke: props.color, fill: "none" }} />
                <SparklinesReferenceLine />
            </Sparklines>
            <div className='forecast'><br/> <i class="far fa-check-circle"></i> avg {props.discript} : {avg(props.data)} {props.units}</div>
            <br/>
            <br/>
        </div>
    );
};

export default Chart;