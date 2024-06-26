import React from 'react';
import Menu from "../comps/Menu.jsx"; 
import Card from "../pages/Card.jsx"; 
import Card1 from "../pages/Card1.jsx"; 
import LineChart from '../pages/LineChart.jsx';
import DonutChart from '../pages/DonutChart.jsx';
import '../styles/Statistics.css';

const Statistics = () => {
    return (
        <div>
        <Menu/>
        <div className="dashboard">
            <div className="top-row">
                <div className="left1">
                    <Card />
                </div>
                <div className="left2">
                    <Card1 />
                </div>
                <div className="left3">
                    <DonutChart />
                </div>
            </div>
            <div className="left4">
                <LineChart />
            </div>
        </div>
        </div>
    );
};

export default Statistics;