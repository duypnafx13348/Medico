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

  $(".profilePicture input[type='file']").on("change", () => {
    previewFile(".profilePicture");
  });
  $(".coverPicture input[type='file']").on("change", () => {
    previewFile(".coverPicture");
  });

  $(".addNewDoctor-add").on("click", handleFormDoctor);
});
