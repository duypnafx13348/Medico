// Linechart
const lineChart = document.getElementById("myLineChart").getContext("2d");
const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "New Patient",
      data: [700, 900, 600, 800, 1000, 700, 700, 900, 800, 1200, 500, 900],
      fill: false,
      borderColor: "#FF55BF",
      borderWidth: 4,
      tension: 0.4,
      backgroundColor: "#FF55BF",
    },
    {
      label: "Old Patient",
      data: [1000, 800, 850, 500, 900, 1300, 1000, 1500, 1250, 700, 1000, 1500],
      fill: false,
      borderColor: "#605BFF",
      borderWidth: 4,
      tension: 0.4,
      backgroundColor: "#605BFF",
    },
  ],
};
const myLineChart = new Chart(lineChart, {
  type: "line",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 2000,
        ticks: {
          stepSize: 500,
          color: "#C2C2DD",
          font: {
            size: 15,
            weight: 400,
          },
        },
        grid: {
          drawBorder: false,
          lineWidth: 0.4,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#C2C2DD",
          font: {
            size: 15,
            weight: 400,
            lineHeight: 2,
          },
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          color: "#70708c",
          usePointStyle: true,
          padding: 20,
          boxWidth: 10,
          boxHeight: 10,
          font: {
            size: 16,
            weight: 400,
          },
        },
      },
    },
  },
});

// Doughnutchart
const doughnutChart = document
  .getElementById("myDoughnutChart")
  .getContext("2d");
const dataDoughnut = {
  labels: ["Tuberculosis", "Stroke", "Cirrhosis", "Lung cancers", "Diabetes"],
  datasets: [
    {
      label: "My First Dataset",
      data: [500, 300, 300, 300, 200],
      backgroundColor: ["#FFBF00", "#5DD971", "#FF7C52", "#4A95FF", "#FF55BF"],
      hoverOffset: 4,
    },
  ],
};
const myDoughnutChart = new Chart(doughnutChart, {
  type: "doughnut",
  data: dataDoughnut,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
    },
  },
});

// Barchart
const barChart = document.getElementById("myBarChart").getContext("2d");
const dataBarChart = {
  labels: ["Sat", "Sun", "Mon", "Tue", "Web", "Thu", "Fri"],
  datasets: [
    {
      label: "Admitted",
      data: [160, 210, 180, 170, 180, 150, 230],
      backgroundColor: "#6B66FF",
      borderRadius: 100,
      barThickness: 15,
    },
    {
      label: "Discharged",
      data: [190, 140, 160, 230, 150, 170, 130],
      backgroundColor: "#FF8F6B",
      borderRadius: 100,
      maxBarThickness: 15,
      categoryPercentage: 0.7,
    },
  ],
};
const myBarChart = new Chart(barChart, {
  type: "bar",
  data: dataBarChart,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 250,
        ticks: {
          stepSize: 50,
          color: "#C2C2DD",
          font: {
            size: 15,
            weight: 400,
          },
        },
        grid: {
          drawBorder: false,
          lineWidth: 0.3,
          tickColor: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#C2C2DD",
          font: {
            size: 15,
            weight: 400,
            lineHeight: 2,
          },
        },
      },
    },
    elements: {
      point: {
        pointStyle: "circle",
      },
    },
    plugins: {
      legend: {
        align: "end",
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          boxHeight: 10,
          font: {
            size: 16,
            weight: 400,
          },
        },
      },
    },
  },
});

// NewLineChart
const newLineChart = document.getElementById("myNewLineChart").getContext("2d");
const dataNewLineChart = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "New Patient",
      data: [700, 900, 600, 800, 1000, 700, 700, 900, 800, 1200, 500, 900],
      fill: false,
      borderColor: "#FF55BF",
      borderWidth: 4,
      tension: 0.4,
      backgroundColor: "#FF55BF",
    },
    {
      label: "Old Patient",
      data: [1000, 800, 850, 500, 900, 1300, 1000, 1500, 1250, 700, 1000, 1500],
      fill: false,
      borderColor: "#605BFF",
      borderWidth: 4,
      tension: 0.4,
      backgroundColor: "#605BFF",
    },
  ],
};
const myNewLineChart = new Chart(newLineChart, {
  type: "line",
  data: dataNewLineChart,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        display: false,
      },
      x: {
        ticks: {
          color: "#C2C2DD",
          font: {
            size: 15,
            weight: 400,
            lineHeight: 2,
          },
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          color: "#70708c",
          usePointStyle: true,
          padding: 20,
          boxWidth: 10,
          boxHeight: 10,
          font: {
            size: 16,
            weight: 400,
          },
        },
      },
    },
  },
});
