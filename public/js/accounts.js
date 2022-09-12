function handleChart() {
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

  const dataRevenueChart = {
    labels: labelsRevenueChart,
    datasets: [
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
    ],
  };

  const configRevenueChart = {
    type: "bar",
    data: dataRevenueChart,
    options: {
      scales: {
        x: {
          grid: {
            display: false,
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
            pointStyle: "circle",
            usePointStyle: true,
          },
        },
      },
    },
  };
  const revenueBarChart = $("#revenueBarChart");
  const myRevenueBarChart = new Chart(revenueBarChart, configRevenueChart);
  // -----------------------------------------------------------------------------

  const expenseDoughnutChart = $("#expenseDoughnutChart");
  const labelsDoughnutChart = ["Equipment", "Salary", "Rent Expense", "Others"];

  const dataDoughnutChart = {
    labels: labelsDoughnutChart,
    datasets: [
      // {
      //   label: "hehe",
      //   backgroundColor: ["#FF6864", "#fff", "#fff", "#fff"],
      //   borderColor: ["#FF6864", "#fff", "#fff", "#fff"],
      //   data: [250, 250, 250, 250],
      //   hoverOffset: 4,
      // },
      {
        label: "Doughnut",
        backgroundColor: ["#FF6864", "#F9BB01", "#C532F9", "#00ACE2"],
        data: [250, 250, 250, 250],
        hoverOffset: 4,
      },
    ],
  };

  const configExpenseDoughnutChart = {
    type: "doughnut",
    data: dataDoughnutChart,
    options: {
      responsive: false,
      maintainAspectRatio: true,
      cutout: 30,

      layout: {
        padding: 30,
      },
      plugins: {
        legend: {
          position: "bottom",

          labels: {
            pointStyle: "circle",
            usePointStyle: true,
            padding: 25,
          },
        },
      },
    },
  };
  const myExpenseDoughnutChart = new Chart(
    expenseDoughnutChart,
    configExpenseDoughnutChart
  );
  // ----------------------------------------------------------------------------------------------

  const visitorsLineChart = $("#visitorsLineChart");
  const labelsVisitorsLineChart = [
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
  ];
  const dataVisitorsLineChart = {
    labels: labelsVisitorsLineChart,
    datasets: [
      {
        label: "This Week",
        borderColor: "#605BFF",
        data: [5, 0, 8, 19, 30, 13, 28],
        tension: 0.9,
      },
    ],
  };

  const configVisitorsLineChart = {
    type: "line",
    data: dataVisitorsLineChart,
    options: {
      scales: {
        x: {
          borderDash: [8],
          grid: {
            borderDash: [5],
            tickWidth: 0,
          },
        },
        y: {
          borderDash: [8],
          grid: {
            borderDash: [5],
            tickWidth: 0,
          },
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
    },
  };

  const myVisitorsLineChart = new Chart(
    visitorsLineChart,
    configVisitorsLineChart
  );
  // ---------------------------------------------------------------------------------------------
}
handleChart();
$(document).ready(function () {
  $(".dashboard__main__content__slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          autoplay: true,
          autoplaySpeed: 2000,
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
