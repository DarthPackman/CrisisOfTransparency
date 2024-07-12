import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineController,
  LineElement
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  LineController
);

const AnimatedLineGraph = () => {
  const data = {
    labels: ['2013-14', '2014-15', '2015-16', '2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23'],
    datasets: [
      {
        label: 'Open ATI requests that are beyond the legislated timelines',
        borderColor: 'rgba(204, 219, 73, 1)',
        backgroundColor: 'rgba(204, 219, 73, 0.2)',
        data: [30, 31, 69, 265, 559, 940, 2353, 4156, 6332, 9920],
        fill: true,
        tension: 0.4 // Adjust tension for smooth curve (0 = straight lines)
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
          color: 'white',
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
    animation: {
      duration: 2000, // Animation duration in milliseconds
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
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default AnimatedLineGraph;
