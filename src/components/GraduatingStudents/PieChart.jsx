import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = ({ chartData }) => {
  const header = chartData.datasets[0].label;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      points: {
        pointStyle: "circle",
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          font: {
            size: 20,
            family: "Montserrat",
            padding: 20,
          },
        },
      },
      chartAreaBorder: {
        borderColor: "red",
        borderWidth: 2,
        borderDash: [5, 5],
        borderDashOffset: 2,
      },
      tooltip: {
        titleFont: {
          size: 10,
          family: "Montserrat",
        },
        bodyFont: {
          size: 10,
          family: "Montserrat",
        },
      },
      title: {
        display: true,
        text: `${header}`,
        align: "center",
        font: { weight: "bold", size: 20, family: "Montserrat", padding: 0 },
      },
    },
  };
  return <Pie data={chartData} options={options} />;
};

export default PieChart;
