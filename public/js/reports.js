import { handleChart } from "./main.js";

function chartGroup() {
  const labelsGeneralChart = [
    "Jan 1",
    "Jan 6",
    "Jan 11",
    "Jan 16",
    "Jan 21",
    "Jan 26",
    "Jan 31",
  ];
  const dataGeneralChart = [
    {
      label: "Revenue",
      backgroundColor: "rgb(96, 91, 255, 0.1)",
      borderColor: "rgb(96, 91, 255, 1)",
      data: [10, 20, 15, 5, 22, 25, 28, 25],
      tension: 0.4,
      fill: "1",
    },
    {
      label: "Expense",
      backgroundColor: "rgb(255, 143, 107, 0.1)",
      borderColor: "rgb(255, 143, 107, 1)",
      data: [0, 10, 5, 2, 20, 15, 18, 20],
      tension: 0.4,
      fill: true,
    },
  ];

  const configGeneralChart = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
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
  };
  const generalChart = $("#generalLineChart");
  handleChart(
    labelsGeneralChart,
    dataGeneralChart,
    "line",
    configGeneralChart,
    generalChart
  );
  // ------------------------------------------------------------------------------------------
  const labelsRevenueLineChart = ["January 1", "January 6", "January 11"];

  const dataRevenueLineChart = [
    {
      label: "Revenue",
      backgroundColor: "rgb(96, 91, 255, 0.1)",
      borderColor: "rgb(96, 91, 255, 1)",
      data: [10, 20, 15],
      tension: 0.4,
      fill: true,
    },
  ];

  const optionRevenueLineChart = {
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        ticks: {
          display: false,
        },
      },
      x: {
        display: false,
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Revenue",
        color: "#605BFF",
        font: {
          size: 16,
          weight: 500,
        },
      },
      subtitle: {
        display: true,
        text: "$15,800",
        font: {
          size: 25,
          weight: 700,
        },
      },
      legend: {
        display: false,
      },
    },
  };

  const revenueChart = $("#revenueLineChart");
  handleChart(
    labelsRevenueLineChart,
    dataRevenueLineChart,
    "line",
    optionRevenueLineChart,
    revenueChart
  );
  // -------------------------------------------------------------------------------------------------
  const labelsExpenseLineChart = ["January 1", "January 6", "January 11"];

  const dataExpenseLineChart = [
    {
      label: "Expense",
      backgroundColor: "rgb(255, 143, 107, 0.1)",
      borderColor: "rgb(255, 143, 107, 1)",
      data: [0, 10, 5],
      tension: 0.4,
      fill: true,
    },
  ];
  const optionExpenseLineChart = {
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        ticks: {
          display: false,
        },
      },
      x: {
        display: false,
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Expense",
        color: "#FF8F6B",
        font: {
          size: 16,
          weight: 500,
        },
      },
      subtitle: {
        display: true,
        text: "$15,800",
        font: {
          size: 25,
          weight: 700,
        },
      },
      legend: {
        display: false,
      },
    },
  };
  const expenseChart = $("#expenseLineChart");
  handleChart(
    labelsExpenseLineChart,
    dataExpenseLineChart,
    "line",
    optionExpenseLineChart,
    expenseChart
  );
  // ----------------------------------------------------------------------------------------------------
}

chartGroup();
$(document).ready(function () {
  const handleProgress = function () {
    $(".reports__card-row .progressValue").each(function () {
      const value = $(this).text().split("%")[0];
      $(this).css("left", `${+value + 5}%`);
    });
  };

  const handleOpenList = function () {
    const valueText = $(this).text();
    $(".btn-group button.dropdown-toggle").text(valueText);
    console.log("valueText", valueText);
  };

  $(".dropdown-item").on("click", handleOpenList);
  handleProgress();
});
