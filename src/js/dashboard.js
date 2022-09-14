const windowSize = $(window).width();
function handleChart() {
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
        data: [
          1000, 800, 850, 500, 900, 1300, 1000, 1500, 1250, 700, 1000, 1500,
        ],
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
        backgroundColor: [
          "#FFBF00",
          "#5DD971",
          "#FF7C52",
          "#4A95FF",
          "#FF55BF",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const myDoughnutChart = new Chart(doughnutChart, {
    type: "doughnut",
    data: dataDoughnut,
    options: {
      maintainAspectRatio: false,
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
  const newLineChart = document
    .getElementById("myNewLineChart")
    .getContext("2d");
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
        data: [
          1000, 800, 850, 500, 900, 1300, 1000, 1500, 1250, 700, 1000, 1500,
        ],
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
}
const lineChart = $("#myLineChart");
const doughnutChart = $("#myDoughnutChart");
const barChart = $("#myBarChart");
const newLineChart = $("#myNewLineChart");

// handleChart();

$(document).ready(function () {
  if (windowSize < 1023) {
    function handleLineChart() {
      const labelsLineChart = ["Jan", "Mar", "May", "July", "Sep", "Nov"];
      const dataLineChart = {
        labels: labelsLineChart,
        datasets: [
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
        ],
      };
      const configLineChart = {
        type: "line",
        data: dataLineChart,
        options: {
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
        },
      };
      const myLineChart = new Chart(lineChart, configLineChart);
    }
    function handleDoughnutChart() {
      const labelsDoughnutChart = [
        "Tuberculosis",
        "Stroke",
        "Cirrhosis",
        "Lung cancers",
        "Diabetes",
      ];
      const dataDoughnutChart = {
        labels: labelsDoughnutChart,
        datasets: [
          {
            label: "My First Dataset",
            data: [500, 300, 300, 300, 200],
            backgroundColor: [
              "#FFBF00",
              "#5DD971",
              "#FF7C52",
              "#4A95FF",
              "#FF55BF",
            ],
            hoverOffset: 4,
          },
        ],
      };
      const configDoughnutChart = {
        type: "doughnut",
        data: dataDoughnutChart,
        options: {
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
        },
      };
      const myDoughnutChart = new Chart(doughnutChart, configDoughnutChart);
    }
    function handleBarChart() {
      const labelsBarChart = ["Sat", "Sun", "Mon", "Tue", "Web", "Thu", "Fri"];
      const dataBarChart = {
        labels: labelsBarChart,
        datasets: [
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
        ],
      };
      const configBarChart = {
        type: "bar",
        data: dataBarChart,
        options: {
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
        },
      };
      const myBarChart = new Chart(barChart, configBarChart);
    }
    function handleNewLineChart() {
      const labelsNewLineChart = ["Jan", "Mar", "May", "July", "Sep", "Nov"];
      const dataNewLineChart = {
        labels: labelsNewLineChart,
        datasets: [
          {
            label: "New Patient",
            data: [700, 900, 600, 800, 1000, 700],
            fill: false,
            borderColor: "#FF55BF",
            borderWidth: 4,
            tension: 0.4,
            backgroundColor: "#FF55BF",
          },
          {
            label: "Old Patient",
            data: [1000, 800, 850, 500, 900, 1300],
            fill: false,
            borderColor: "#605BFF",
            borderWidth: 4,
            tension: 0.4,
            backgroundColor: "#605BFF",
          },
        ],
      };
      const configNewLineChart = {
        type: "line",
        data: dataNewLineChart,
        options: {
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
              display: false,
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
        },
      };
      const myNewLineChart = new Chart(newLineChart, configNewLineChart);
    }

    handleLineChart();
    handleDoughnutChart();
    handleBarChart();
    handleNewLineChart();
  } else {
    function handleLineChart() {
      const labelsLineChart = [
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
      const dataLineChart = {
        labels: labelsLineChart,
        datasets: [
          {
            label: "New Patient",
            data: [
              700, 900, 600, 800, 1000, 700, 700, 900, 800, 1200, 500, 900,
            ],
            fill: false,
            borderColor: "#FF55BF",
            borderWidth: 4,
            tension: 0.4,
            backgroundColor: "#FF55BF",
          },
          {
            label: "Old Patient",
            data: [
              1000, 800, 850, 500, 900, 1300, 1000, 1500, 1250, 700, 1000, 1500,
            ],
            fill: false,
            borderColor: "#605BFF",
            borderWidth: 4,
            tension: 0.4,
            backgroundColor: "#605BFF",
          },
        ],
      };
      const configLineChart = {
        type: "line",
        data: dataLineChart,
        options: {
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
        },
      };
      const myLineChart = new Chart(lineChart, configLineChart);
    }
    function handleDoughnutChart() {
      const labelsDoughnutChart = [
        "Tuberculosis",
        "Stroke",
        "Cirrhosis",
        "Lung cancers",
        "Diabetes",
      ];
      const dataDoughnutChart = {
        labels: labelsDoughnutChart,
        datasets: [
          {
            label: "My First Dataset",
            data: [500, 300, 300, 300, 200],
            backgroundColor: [
              "#FFBF00",
              "#5DD971",
              "#FF7C52",
              "#4A95FF",
              "#FF55BF",
            ],
            hoverOffset: 4,
          },
        ],
      };
      const configDoughnutChart = {
        type: "doughnut",
        data: dataDoughnutChart,
        options: {
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
        },
      };
      const myDoughnutChart = new Chart(doughnutChart, configDoughnutChart);
    }
    function handleBarChart() {
      const labelsBarChart = ["Sat", "Sun", "Mon", "Tue", "Web", "Thu", "Fri"];
      const dataBarChart = {
        labels: labelsBarChart,
        datasets: [
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
        ],
      };
      const configBarChart = {
        type: "bar",
        data: dataBarChart,
        options: {
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
        },
      };
      const myBarChart = new Chart(barChart, configBarChart);
    }
    function handleNewLineChart() {
      const labelsNewLineChart = ["Jan", "Mar", "May", "July", "Sep", "Nov"];
      const dataNewLineChart = {
        labels: labelsNewLineChart,
        datasets: [
          {
            label: "New Patient",
            data: [700, 900, 600, 800, 1000, 700],
            fill: false,
            borderColor: "#FF55BF",
            borderWidth: 4,
            tension: 0.4,
            backgroundColor: "#FF55BF",
          },
          {
            label: "Old Patient",
            data: [1000, 800, 850, 500, 900, 1300],
            fill: false,
            borderColor: "#605BFF",
            borderWidth: 4,
            tension: 0.4,
            backgroundColor: "#605BFF",
          },
        ],
      };
      const configNewLineChart = {
        type: "line",
        data: dataNewLineChart,
        options: {
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
              display: false,
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
        },
      };
      const myNewLineChart = new Chart(newLineChart, configNewLineChart);
    }

    handleLineChart();
    handleDoughnutChart();
    handleBarChart();
    handleNewLineChart();
  }

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
            arrows: true,
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
