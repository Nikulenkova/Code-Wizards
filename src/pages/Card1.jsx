import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const Card1 = () => {
  // Данные по дням
  const dailyRequests = [
    { date: '1.05', count: 0 },
    { date: '2.05', count: 20 },
    { date: '3.05', count: 5 },
    { date: '4.05', count: 15 }
  ];

  const totalRequests = dailyRequests.reduce((sum, day) => sum + day.count, 0);

  const data = {
    labels: dailyRequests.map(day => day.date),
    datasets: [
      {
        data: dailyRequests.map(day => day.count),
        fill: true,
        backgroundColor: 'rgba(255, 234, 209, 0.2)', 
        borderColor: '#F3CFBA', 
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false, 
      },
    },
    plugins: {
      legend: {
        display: false, 
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    layout: {
      padding: 0,
    },
    maintainAspectRatio: false,
  };

  return (
    <div className='card-conteiner'>
      <div className='card-conteiner1'>
        <span className='check_mark2'>&minus;</span>
      </div>
      <div className='card-conteiner2'>{totalRequests}</div>
      <div className='text-card'>Обращений отклонено</div>
      <div className='card-line'> 
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Card1;