const api = "https://6305c1c6dde73c0f844abb5d.mockapi.io/patient";

$(document).ready(function () {
  const handleChangeInputAvatar = function () {
    const preview = document.querySelector(
      ".dashboard__main__content__avatar img#avatar"
    );
    const file = document.querySelector(".editAvatar input[type=file]")
      .files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        preview.src = reader.result;
        $(".dashboard__main__content__avatar img#avatar").show();
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleClickList = function () {
    $(".dashboard__main__content__item").removeClass("active");
    $(this).addClass("active");
    const checkTextItem = $(this).text();
    // if (checkTextItem == "Personal Information") {
    $(".guardianInformation").fadeOut(500);
    $(".personalInformation").fadeIn(500);
    // } else {
    //   $(".personalInformation").fadeOut(500);
    //   $(".guardianInformation").fadeIn(500);
    // }
  };

  const patient = {};
  const handleClickNext = function () {
    const formData = new FormData();
    const imageAvatar = $(".editAvatar input[type=file]")[0].files[0];
    formData.append("image", imageAvatar);
    console.log("image", imageAvatar);
    const option = {
      url: "https://api.imgbb.com/1/upload?key=5024fac460ee791e12250c65c2cb1dc3",
      data: formData,
      processData: false,
      contentType: false,
    };
    $.post(option, function (res, status) {
      patient.avatar = res.data.url;
      console.log("res", res);

      const valueForm = $(
        "form.dashboard__main__content__information-personalInformation"
      ).serializeArray();
      valueForm.forEach((item) => {
        patient[item.name] = item.value;
      });
      $(".dashboard__main__content__item").removeClass("active");
      $(".dashboard__main__content__item:last-child").addClass("active");
      $(".personalInformation").fadeOut(500);
      $(".guardianInformation").fadeIn(500);
    });
  };

  const handleClickAdd = function () {
    const guardian = {};
    const valueForm = $(
      "form.dashboard__main__content__information-guardianInformation"
    ).serializeArray();
    valueForm.forEach((item) => {
      guardian[item.name] = item.value;
    });
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const random = Math.ceil(Math.random() * 3);
    patient.checkin = date + "/" + month + "/" + year;
    patient.doctorAssgined =
      random == 1 ? "Ai chữa thì chữa" : random == 2 ? "Dr.Mike" : "Dr.Alice";
    patient.disease =
      random == 1 ? "Cold & Flu" : random == 2 ? "Đau Bụng" : "Sốt Xuất Huyết";
    patient.status =
      random == 1 ? "New Patient" : random == 2 ? "Recovered" : "In Treatment";
    patient.roomNo = "D-105";
    patient.guardian = JSON.stringify(guardian);

    $.post(api, patient, function (data, status) {
      console.log("POSTED");
      window.location.replace("patientList.html");
    });
  };

  $("#personalInformation-form").validate({
    rules: {
      patientName: {
        required: true,
        rangelength: [3, 15],
      },
      phoneNumber: {
        required: true,
        number: true,
        rangelength: [8, 11],
      },
      address: {
        required: true,
      },
      age: {
        required: true,
        number: true,
        min: 1,
        max: 99,
      },
    },
    messages: {
      patientName: {
        required: "This field is required.",
        rangelength: "Please enter a value between 3 and 15 characters long.",
      },
      phoneNumber: {
        required: "This field is required.",
        number: "This field is number.",
        rangelength: "Please enter a value between 8 and 11 characters long.",
      },
      address: {
        required: "This field is required.",
      },
      age: {
        required: "This field is required.",
        number: "This field is number.",
        min: "Value greater than or equal to 1.",
        max: "Value less than or equal to 99.",
      },
    },
    submitHandler: handleClickNext,
  });

  $("#guardianInformation-form").validate({
    rules: {
      guardianName: {
        required: true,
        rangelength: [3, 15],
      },
      phoneNumber: {
        required: true,
        number: true,
        rangelength: [8, 11],
      },
      address: {
        required: true,
      },
      age: {
        required: true,
        number: true,
        min: 1,
        max: 99,
      },
    },
    messages: {
      guardianName: {
        required: "This field is required.",
        rangelength: "Please enter a value between 3 and 15 characters long.",
      },
      phoneNumber: {
        required: "This field is required.",
        number: "This field is number.",
        rangelength: "Please enter a value between 8 and 11 characters long.",
      },
      address: {
        required: "This field is required.",
      },
      age: {
        required: "This field is required.",
        number: "This field is number.",
        min: "Value greater than or equal to 1.",
        max: "Value less than or equal to 99.",
      },
    },
    submitHandler: handleClickAdd,
  });

  $("#patientAvatar").on("change", handleChangeInputAvatar);
  $(".dashboard__main__content__item:first-child").on("click", handleClickList);
  // $(".personalInformation-next").on("click", handleClickNext);
  // $(".guardianInformation-add").on("click", handleClickAdd);
});
