import { handleChart } from "./main.js";

const windowSize = $(window).width();
const lineChart = $("#myLineChart");
const doughnutChart = $("#myDoughnutChart");
const barChart = $("#myBarChart");
const newLineChart = $("#myNewLineChart");

if (windowSize < 1023) {
  // lineChart
  const labelLineChart = ["Jan", "Mar", "May", "July", "Sep", "Nov"];
  const datasetLineChart = [
    {
      label: "New Patient",
      data: [700, 900, 600, 800, 1000, 700],
      fill: false,
      borderColor: "#FF55BF",
      borderWidth: 3,
      tension: 0.4,
      backgroundColor: "#FF55BF",
    },
    {
      label: "Old Patient",
      data: [1000, 800, 850, 500, 900, 1300],
      fill: false,
      borderColor: "#605BFF",
      borderWidth: 3,
      tension: 0.4,
      backgroundColor: "#605BFF",
    },
  ];
  const optionLineChart = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 2000,
        ticks: {
          stepSize: 500,
          color: "#C2C2DD",
          font: {
            size: 12,
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
            size: 12,
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
          boxWidth: 5,
          boxHeight: 5,
          font: {
            size: 12,
            weight: 400,
          },
        },
      },
    },
  };

  // DoughnutChart
  const labelDoughnutChart = [
    "Tuberculosis",
    "Stroke",
    "Cirrhosis",
    "Lung cancers",
    "Diabetes",
  ];
  const datasetDoughnutChart = [
    {
      label: "My First Dataset",
      data: [500, 300, 300, 300, 200],
      backgroundColor: ["#FFBF00", "#5DD971", "#FF7C52", "#4A95FF", "#FF55BF"],
      hoverOffset: 4,
    },
  ];
  const optionDoughnutChart = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 20,
          boxWidth: 7,
          boxHeight: 7,
          font: {
            size: 12,
          },
        },
      },
    },
  };

  //  BarChart
  const labelBarChart = ["Sat", "Sun", "Mon", "Tue", "Web", "Thu", "Fri"];
  const datasetBarChart = [
    {
      label: "Admitted",
      data: [160, 210, 180, 170, 180, 150, 230],
      backgroundColor: "#6B66FF",
      borderRadius: 100,
      barThickness: 8,
      categoryPercentage: 0.5,
    },
    {
      label: "Discharged",
      data: [190, 140, 160, 230, 150, 170, 130],
      backgroundColor: "#FF8F6B",
      borderRadius: 100,
      maxBarThickness: 10,
      categoryPercentage: 0.5,
    },
  ];
  const optionBarChart = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 250,
        ticks: {
          stepSize: 50,
          color: "#C2C2DD",
          font: {
            size: 12,
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
            size: 12,
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
          boxWidth: 5,
          boxHeight: 5,
          font: {
            size: 12,
            weight: 400,
          },
        },
      },
    },
  };

  // NewLinechart
  const optionNewLineChart = {
    maintainAspectRatio: false,
    scales: {
      x: {
        borderDash: [8],
        grid: {
          borderDash: [5],
          tickWidth: 0,
        },
      },
      y: {
        ticks: {
          display: false,
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
          boxWidth: 5,
          boxHeight: 5,
          font: {
            size: 12,
            weight: 400,
          },
        },
      },
    },
  };

  handleChart(
    labelLineChart,
    datasetLineChart,
    "line",
    optionLineChart,
    lineChart
  );
  handleChart(
    labelDoughnutChart,
    datasetDoughnutChart,
    "doughnut",
    optionDoughnutChart,
    doughnutChart
  );
  handleChart(labelBarChart, datasetBarChart, "bar", optionBarChart, barChart);
  handleChart(
    labelLineChart,
    datasetLineChart,
    "line",
    optionNewLineChart,
    newLineChart
  );
} else {
  // lineChart
  const labelLineChart = [
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
  ];
  const datasetLineChart = [
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
  ];
  const optionLineChart = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 2000,
        ticks: {
          stepSize: 500,
          color: "#C2C2DD",
          font: {
            size: 13,
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
            size: 13,
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
          boxWidth: 7,
          boxHeight: 7,
          font: {
            size: 13,
            weight: 400,
          },
        },
      },
    },
  };

  // DoughnutChart
  const labelDoughnutChart = [
    "Tuberculosis",
    "Stroke",
    "Cirrhosis",
    "Lung cancers",
    "Diabetes",
  ];
  const datasetDoughnutChart = [
    {
      label: "My First Dataset",
      data: [500, 300, 300, 300, 200],
      backgroundColor: ["#FFBF00", "#5DD971", "#FF7C52", "#4A95FF", "#FF55BF"],
      hoverOffset: 4,
    },
  ];
  const optionDoughnutChart = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 20,
          boxWidth: 7,
          boxHeight: 7,
          font: {
            size: 13,
          },
        },
      },
    },
  };

  //  BarChart
  const labelBarChart = ["Sat", "Sun", "Mon", "Tue", "Web", "Thu", "Fri"];
  const datasetBarChart = [
    {
      label: "Admitted",
      data: [160, 210, 180, 170, 180, 150, 230],
      backgroundColor: "#6B66FF",
      borderRadius: 100,
      barThickness: 8,
      categoryPercentage: 0.5,
    },
    {
      label: "Discharged",
      data: [190, 140, 160, 230, 150, 170, 130],
      backgroundColor: "#FF8F6B",
      borderRadius: 100,
      maxBarThickness: 10,
      categoryPercentage: 0.5,
    },
  ];
  const optionBarChart = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 250,
        ticks: {
          stepSize: 50,
          color: "#C2C2DD",
          font: {
            size: 13,
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
            size: 13,
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
          boxWidth: 7,
          boxHeight: 7,
          font: {
            size: 13,
            weight: 400,
          },
        },
      },
    },
  };

  // NewLineChart
  const optionNewLineChart = {
    maintainAspectRatio: false,
    scales: {
      x: {
        borderDash: [8],
        ticks: {
          color: "#C2C2DD",
          font: {
            size: 8,
            weight: 400,
          },
        },
        grid: {
          borderDash: [5],
          tickWidth: 0,
        },
      },
      y: {
        ticks: {
          display: false,
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
          boxWidth: 7,
          boxHeight: 7,
          font: {
            size: 13,
            weight: 400,
          },
        },
      },
    },
  };

  // call handleChart
  handleChart(
    labelLineChart,
    datasetLineChart,
    "line",
    optionLineChart,
    lineChart
  );
  handleChart(
    labelDoughnutChart,
    datasetDoughnutChart,
    "doughnut",
    optionDoughnutChart,
    doughnutChart
  );
  handleChart(labelBarChart, datasetBarChart, "bar", optionBarChart, barChart);
  handleChart(
    labelLineChart,
    datasetLineChart,
    "line",
    optionNewLineChart,
    newLineChart
  );
}

$(document).ready(function () {
  function handleSliderDashboard() {
    $(".dashboard__main__content__slider").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1144,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            centerMode: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            centerMode: true,
          },
        },
      ],
    });
  }
  handleSliderDashboard();
});
