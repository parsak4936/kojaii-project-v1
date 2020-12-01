import React, { Component } from 'react';
import {   Line  } from 'react-chartjs-2';
import { Card, CardBody, CardHeader } from 'reactstrap';
import  './charts.css'

const line = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
        },
    ],
};

const bar = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40],
        },
    ],
};


const options = {
    tooltips: {
        enabled: false,

    },
    maintainAspectRatio: false
}

class Charts extends Component {
    render() {
        return (
            <div className="animated fadeIn chart_container">
        <div  >
            <Card  className="chart-fullbody">
                <CardHeader>
                    تعداد نمی دونم چی  چی فعلا

                </CardHeader>
                <CardBody>
                    <div className="chart-wrapper chart_self ">
                        <Line data={line} options={options}   />
                    </div>
                </CardBody>
            </Card>
        </div>





            </div>
        );
    }
}

export default Charts;
