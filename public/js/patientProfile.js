import { handleChart } from "./main.js";

const patientId = window.location.search.slice(4) || 1;
const api = `https://6305c1c6dde73c0f844abb5d.mockapi.io/patient/${patientId}`;
const windowSize = $(window).width();

const heartRateChart = $("#myHeartRateChart");
const systolicChart = $("#mySystolicChart");
const diastolicChart = $("#myDiastolicChart");

// HeartRateChart
const labelHeartRateChart = [
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
];
const datasetHeartRateChart = [
  {
    label: "",
    data: [10, 10, 15, 10, 5, 10, 10, 10, 15, 10, 10, 8, 10, 10, 10, 10],
    borderWidth: 3,
    borderColor: "#5DD971",
  },
];
var optionHeartRateChart = {
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
};

// SystolicChart
const labelSystolicChart = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const datasetSystolicChart = [
  {
    label: "",
    data: [70, 80, 50, 70, 80, 30],
    fill: true,
    borderColor: "#FF55BF",
    borderWidth: 2,
    tension: 0.4,
    backgroundColor: "rgba(255, 143, 107, 0.1)",
  },
];
var optionSystolicChart = {
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
};

// DiastolicChart
const labelDiastolicChart = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const datasetDiastolicChart = [
  {
    label: "",
    data: [70, 90, 60, 80, 100, 70],
    fill: true,
    tension: 0.4,
    borderColor: "rgba(93, 217, 113, 1)",
    borderWidth: 2,
    backgroundColor: "rgba(93, 217, 113, 0.1)",
  },
];
var optionDiastolicChart = {
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
};

handleChart(
  labelHeartRateChart,
  datasetHeartRateChart,
  "line",
  optionHeartRateChart,
  heartRateChart
);
handleChart(
  labelSystolicChart,
  datasetSystolicChart,
  "line",
  optionSystolicChart,
  systolicChart
);
handleChart(
  labelDiastolicChart,
  datasetDiastolicChart,
  "line",
  optionDiastolicChart,
  diastolicChart
);

$(document).ready(function () {
  $.get(api, function (data) {
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

    const dataValueProfile = [
      "30 Nov 1996",
      data.age,
      data.gender,
      data.religion,
      data.occupation,
      data.maritalStatus,
      data.address,
      data.phoneNumber,
      parseData.guardianName,
      parseData.relation,
      parseData.phoneNumber,
    ];

    const itemProfileLength = $(
      ".dashboard__main__content__profile__body__item"
    ).length;

    for (let i = 1; i <= itemProfileLength; i++) {
      $(
        `.dashboard__main__content__profile__body__item:nth-child(${i}) .value`
      ).text(dataValueProfile[i - 1]);
    }
  });
});
