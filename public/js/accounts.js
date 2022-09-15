import { handleChart } from "./main.js";

const windowSize = $(window).width();
const revenueBarChart = $("#revenueBarChart");
const expenseDoughnutChart = $("#expenseDoughnutChart");
const visitorsLineChart = $("#visitorsLineChart");

function chartGroup() {
  const labelsVisitorsLineChart = [
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
  ];
  const dataVisitorsLineChart = [
    {
      label: "This Week",
      borderColor: "#605BFF",
      data: [5, 0, 8, 19, 30, 13, 28],
      tension: 0.9,
    },
  ];
  const configVisitorsLineChart = {
    maintainAspectRatio: false,
    scales: {
      x: {
        borderDash: [8],
        grid: {
          borderDash: [5],
          tickWidth: 0,
        },
        ticks: {
          color: "#C2C2DD",
          font: {
            size: 13,
            weight: 400,
          },
        },
      },
      y: {
        borderDash: [8],
        grid: {
          borderDash: [5],
          tickWidth: 0,
        },
        ticks: {
          color: "#C2C2DD",
          font: {
            size: 13,
            weight: 400,
          },
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    layout: {
      padding: 30,
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        text: "This Week",
        display: true,
        align: "end",
        color: "#70708C",
        padding: {
          bottom: 20,
        },
        font: {
          size: 16,
          weight: 400,
        },
      },
    },
  };

  handleChart(
    labelsVisitorsLineChart,
    dataVisitorsLineChart,
    "line",
    configVisitorsLineChart,
    visitorsLineChart
  );
  // ---------------------------------------------------------------------------------------------
}
chartGroup();

if (windowSize < 500) {
  function handleRevenueChart() {
    const labelsRevenueChart = ["Jan", "Mar", "May", "July", "Sep", "Dec"];
    const dataRevenueChart = [
      {
        label: "Income",
        backgroundColor: "#605BFF",
        borderColor: "#605BFF",
        data: [15, 20, 15, 25, 22, 25],
        stack: "Stack 0",
      },
      {
        label: "Expense",
        backgroundColor: "#FF8F6B",
        borderColor: "#FF8F6B",
        data: [-20, -30, -25, -40, -20, -15],
        stack: "Stack 0",
      },
    ];
    const configRevenueChart = {
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: "#C2C2DD",
            font: {
              size: 11,
              weight: 400,
            },
          },
        },
        y: {
          min: -60,
          max: 60,
          stacked: true,
          grid: {
            display: false,
          },

          ticks: {
            stepSize: 20,
            color: "#C2C2DD",
            font: {
              size: 11,
              weight: 400,
            },
          },
        },
      },
      layout: {
        padding: 30,
      },
      elements: {
        bar: {
          borderRadius: 50,
        },
      },
      datasets: {
        bar: {
          barThickness: 10,
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "#70708c",
            pointStyle: "circle",
            usePointStyle: true,
            padding: 20,
            boxWidth: 7,
            boxHeight: 7,
            font: {
              size: 12,
              weight: 400,
            },
          },
        },
      },
    };
    handleChart(
      labelsRevenueChart,
      dataRevenueChart,
      "bar",
      configRevenueChart,
      revenueBarChart
    );
  }

  function handleExpenseChart() {
    const labelsDoughnutChart = [
      "Equipment",
      "Salary",
      "Rent Expense",
      "Others",
    ];
    const dataDoughnutChart = [
      {
        label: "Doughnut",
        backgroundColor: ["#FF6864", "#F9BB01", "#C532F9", "#00ACE2"],
        data: [250, 250, 250, 250],
        hoverOffset: 4,
      },
    ];
    const configExpenseDoughnutChart = {
      maintainAspectRatio: false,
      cutout: 30,

      layout: {
        padding: 15,
      },
      plugins: {
        legend: {
          position: "bottom",

          labels: {
            color: "#70708c",
            pointStyle: "circle",
            usePointStyle: true,
            padding: 20,
            boxWidth: 7,
            boxHeight: 7,
            font: {
              size: 12,
              weight: 400,
            },
          },
        },
      },
    };
    handleChart(
      labelsDoughnutChart,
      dataDoughnutChart,
      "doughnut",
      configExpenseDoughnutChart,
      expenseDoughnutChart
    );
  }

  handleRevenueChart();
  handleExpenseChart();
} else {
  function handleRevenueChart() {
    const labelsRevenueChart = [
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
    const dataRevenueChart = [
      {
        label: "Income",
        backgroundColor: "#605BFF",
        borderColor: "#605BFF",
        data: [15, 20, 15, 25, 22, 25, 28, 25, 15, 20, 15, 25],
        stack: "Stack 0",
      },
      {
        label: "Expense",
        backgroundColor: "#FF8F6B",
        borderColor: "#FF8F6B",
        data: [-20, -30, -25, -40, -20, -15, -18, -20, -20, -30, -25, -40],
        stack: "Stack 0",
      },
    ];
    const configRevenueChart = {
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: "#C2C2DD",
            font: {
              size: 13,
              weight: 400,
            },
          },
        },
        y: {
          min: -60,
          max: 60,
          stacked: true,
          grid: {
            display: false,
          },

          ticks: {
            stepSize: 20,
            color: "#C2C2DD",
            font: {
              size: 11,
              weight: 400,
            },
          },
        },
      },
      layout: {
        padding: 15,
      },
      elements: {
        bar: {
          borderRadius: 50,
        },
      },
      datasets: {
        bar: {
          barThickness: 10,
        },
      },
      plugins: {
        legend: {
          labels: {
            pointStyle: "circle",
            usePointStyle: true,
          },
        },
      },
    };
    handleChart(
      labelsRevenueChart,
      dataRevenueChart,
      "bar",
      configRevenueChart,
      revenueBarChart
    );
  }

  function handleExpenseChart() {
    const labelsDoughnutChart = [
      "Equipment",
      "Salary",
      "Rent Expense",
      "Others",
    ];
    const dataDoughnutChart = [
      {
        label: "Doughnut",
        backgroundColor: ["#FF6864", "#F9BB01", "#C532F9", "#00ACE2"],
        data: [250, 250, 250, 250],
        hoverOffset: 4,
      },
    ];
    const configExpenseDoughnutChart = {
      maintainAspectRatio: false,
      cutout: 30,

      layout: {
        padding: 30,
      },
      plugins: {
        legend: {
          position: "bottom",

          labels: {
            color: "#70708c",
            pointStyle: "circle",
            usePointStyle: true,
            padding: 25,
            boxWidth: 10,
            boxHeight: 10,
            font: {
              size: 13,
              weight: 400,
            },
          },
        },
      },
    };
    handleChart(
      labelsDoughnutChart,
      dataDoughnutChart,
      "doughnut",
      configExpenseDoughnutChart,
      expenseDoughnutChart
    );
  }

  handleRevenueChart();
  handleExpenseChart();
}

$(document).ready(function () {
  $(".dashboard__main__content__slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2500,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2500,
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
});
