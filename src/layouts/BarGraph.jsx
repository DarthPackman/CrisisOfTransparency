import React from 'react';
import { Bar } from 'react-chartjs-2'; //npm i react-chartjs-2 chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

const BarGraph = () => {
  const data = {
    labels: ['2013-14', '2014-15', '2015-16', '2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23'],
    datasets: [
      {
        label: 'Open ATI requests that are beyond the legislated timelines',
        backgroundColor: 'rgba(204, 219, 73, 1)',
        data: [30, 31, 69, 265, 559, 940, 2353, 4156, 6332, 9920],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
        },
        ticks: {
          color: 'white', 
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          color: 'white', 
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white', 
        },
      },
      title: {
        display: true,
        text: 'Breakdown of ATI Requests',
        color: 'white', 
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
      <div style={{ width: '90%', height: '90vh', maxHeight: '90%' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarGraph;