const patientId = window.location.search.slice(4) || 1;
const api = `https://6305c1c6dde73c0f844abb5d.mockapi.io/patient/${patientId}`;
let width, height, gradient;
function getGradient(ctx, chartArea) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0.5, "rgba(255,255, 255, 1)");
    gradient.addColorStop(1, "rgba(255, 85, 191, 0.1)");
  }

  return gradient;
}

const myHeartRateChart = document
  .getElementById("myHeartRateChart")
  .getContext("2d");
const data = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
  ],
  datasets: [
    {
      label: "",
      data: [10, 10, 15, 10, 5, 10, 10, 10, 15, 10, 10, 8, 10, 10, 10, 10],
      borderWidth: 3,
      borderColor: "#5DD971",
    },
  ],
};
const myLineChart = new Chart(myHeartRateChart, {
  type: "line",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 20,
        ticks: {
          display: false,
        },
      },
      x: {
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  },
});

const mySystolicChart = document
  .getElementById("mySystolicChart")
  .getContext("2d");
const dataSystolicChart = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "",
      data: [70, 80, 50, 70, 80, 30],
      fill: true,
      borderColor: "#FF55BF",
      borderWidth: 2,
      tension: 0.4,
      backgroundColor: "rgba(255, 143, 107, 0.1)",
    },
  ],
};
const myLineSystolicChart = new Chart(mySystolicChart, {
  type: "line",
  data: dataSystolicChart,
  options: {
    scales: {
      y: {
        min: -10,
        max: 100,
        display: false,
        beginAtZero: true,
      },
      x: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "150 mmhz",
        position: "bottom",
        align: "start",
        color: "#FF8F6B",
        font: {
          size: 18,
          weight: 700,
        },
      },
      subtitle: {
        display: true,
        text: "Systolic",
        position: "bottom",
        align: "start",
        color: "#70708C",
        font: {
          size: 12,
          weight: 400,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  },
});

const myDiastolicChart = document
  .getElementById("myDiastolicChart")
  .getContext("2d");
const dataDiastolicChart = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "",
      data: [70, 90, 60, 80, 100, 70],
      fill: true,
      tension: 0.4,
      borderColor: "rgba(93, 217, 113, 1)",
      borderWidth: 2,
      backgroundColor: "rgba(93, 217, 113, 0.1)",
    },
  ],
};
const myLineDiastolicChart = new Chart(myDiastolicChart, {
  type: "line",
  data: dataDiastolicChart,
  options: {
    scales: {
      y: {
        display: false,
        beginAtZero: true,
        min: -10,
        max: 100,
      },
      x: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "75 mhz",
        position: "bottom",
        align: "start",
        color: "#5DD971",
        font: {
          size: 18,
          weight: 700,
        },
      },
      subtitle: {
        display: true,
        text: "Diastolic",
        position: "bottom",
        align: "start",
        color: "#70708C",
        font: {
          size: 12,
          weight: 400,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  },
});

$(document).ready(function () {
  $.get(api, function (data) {
    console.log("data", data);
    const parseData = JSON.parse(data.guardian);
    $(".dashboard__main__content__profile__header-avatar img").attr(
      "src",
      data.avatar
    );
    $(".dashboard__main__content__profile__header-name h3").text(
      data.patientName
    );
    $(
      ".dashboard__main__content__profile__header-name-id span:first-child"
    ).text(data.id);
    $(
      ".dashboard__main__content__profile__header-name-id span:last-child"
    ).text(data.disease);
    $(".dashboard__main__content__profile__body--doB .value").text(
      "30 Nov 1996"
    );
    $(".dashboard__main__content__profile__body--age .value").text(data.age);
    $(".dashboard__main__content__profile__body--gender .value").text(
      data.gender
    );
    $(".dashboard__main__content__profile__body--religion .value").text(
      data.religion
    );
    $(".dashboard__main__content__profile__body--occupation .value").text(
      data.occupation
    );
    $(".dashboard__main__content__profile__body--maritalStatus .value").text(
      data.maritalStatus
    );
    $(".dashboard__main__content__profile__body--address .value").text(
      data.address
    );
    $(".dashboard__main__content__profile__body--phone .value").text(
      data.phoneNumber
    );
    $(".dashboard__main__content__profile__body--guardianName .value").text(
      parseData.guardianName
    );
    $(".dashboard__main__content__profile__body--relationship .value").text(
      parseData.relation
    );
    $(".dashboard__main__content__profile__body--guardianPhone .value").text(
      parseData.phoneNumber
    );
  });
});
