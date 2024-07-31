import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useInView } from 'react-intersection-observer';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineController,
  LineElement,
  PointElement,  // Ensure PointElement is registered as well
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  LineController,
  PointElement  // Register PointElement
);

const AnimatedLineGraph = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensure this is true so it only triggers once when it comes into view
    rootMargin: '0px',
    threshold: 0.5
  });

  const [chartKey, setChartKey] = useState(Date.now());

  const data = {
    labels: ['2012-13', '2013-14', '2014-15', '2015-16', '2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2021-22'],
    datasets: [
      {
        label: 'Costs in Millions of Institutions Operations',
        borderColor: 'rgba(204, 219, 73, 1)',
        backgroundColor: 'rgba(204, 219, 73, 0.2)',  
        pointBackgroundColor: 'rgba(204, 219, 73, 1)',  // Ensure points are filled
        pointBorderColor: 'rgba(204, 219, 73, 1)',
        data: [56.3, 59.7, 64.3, 61.9, 61.4, 65.6, 68.5, 71.7, 77.7, 83.2],
        fill: true,
        tension: 0.1 // Adjust tension for smooth curve (0 = straight lines)
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
          color: 'rgba(99, 99, 99, 0.5)', 
        },
        ticks: {
          color: 'white', 
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false,
          color: 'rgba(99, 99, 99, 0.5)',
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
        text: 'Costs of Administering the System',
        color: 'white', 
        font: {
          size: 18,
        },
      },
    },
    animation: {
      duration: 2000, 
      easing: 'linear', 
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
    elements: {
      point: {
        radius: 5, 
        backgroundColor: 'rgba(204, 219, 73, 1)', 
        borderColor: 'rgba(204, 219, 73, 1)',
      },
      line: {
        borderWidth: 2,
      },
    },
  };

  React.useEffect(() => {
    if (inView) {
      // Force a re-render by updating the chart key
      setChartKey(Date.now());
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div style={{ width: '90%', height: '90vh', maxHeight: '90%' }}>
        <Line key={chartKey} data={data} options={options} />
      </div>
    </div>
  );
};

export default AnimatedLineGraph;
