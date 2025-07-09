import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

function SentimentChart() {
  const data = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        label: "Sentiment Score",
        data: [65, 20, 15],
        backgroundColor: ["#4caf50", "#ffc107", "#f44336"],
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h3>Sentiment Analysis Chart</h3>
      <Bar data={data} options={options} />
    </div>
  );
}

export default SentimentChart;
