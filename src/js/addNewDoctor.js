const doctorApi = "https://6305c1c6dde73c0f844abb5d.mockapi.io/doctors";
$(document).ready(function () {
  function previewFile(className) {
    const preview = document.querySelector(`${className} img`);
    const file = document.querySelector(`${className} input[type=file]`)
      .files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        preview.src = reader.result;
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  const handleFormDoctor = function () {
    const addNewDoctor = {};
    const formData = new FormData();
    const imageAvatar = $(".profilePicture input[type=file]")[0].files[0];
    formData.append("image", imageAvatar);
    const option1 = {
      url: "https://api.imgbb.com/1/upload?key=5024fac460ee791e12250c65c2cb1dc3",
      data: formData,
      processData: false,
      contentType: false,
    };
    $.post(option1, function (res, status) {
      addNewDoctor.avatar = res.data.url;
      const fd = new FormData();
      const imageBackground = $(".coverPicture input[type=file]")[0].files[0];
      fd.append("image", imageBackground);
      const option2 = {
        url: "https://api.imgbb.com/1/upload?key=5024fac460ee791e12250c65c2cb1dc3",
        data: fd,
        processData: false,
        contentType: false,
      };
      $.post(option2, function (res, status) {
        addNewDoctor.background = res.data.url;
        const formDoctor = $(
          "form.dashboard__main__content__information"
        ).serializeArray();
        formDoctor.map((item) => {
          addNewDoctor.workTimes = "4:00 PM - 9:00 PM";
          addNewDoctor.rating = Math.ceil(Math.random() * 5);
          return (addNewDoctor[item.name] = item.value);
        });

        $.post(doctorApi, addNewDoctor, function (data) {
          window.location.replace("./allDoctor.html");
        });
      });
    });
  };

  $("#doctor-form").validate({
    rules: {
      doctorName: {
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
      emailAddress: {
        required: true,
        email: true,
      },
      doB: {
        required: true,
      },
    },
    messages: {
      doctorName: {
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
      emailAddress: {
        required: "This field is required.",
        email: "This field is email.",
      },
      doB: {
        required: "This field is required.",
      },
    },
    submitHandler: () => {
      $("#doctor-form").submit((e) => e.preventDefault());
      handleFormDoctor();
    },
  });

  $(".profilePicture input[type='file']").on("change", () => {
    previewFile(".profilePicture");
  });
  $(".coverPicture input[type='file']").on("change", () => {
    previewFile(".coverPicture");
  });

  // $(".addNewDoctor-add").on("click", handleFormDoctor);
});
