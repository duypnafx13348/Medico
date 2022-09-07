const doctorId = window.location.search.slice(4) || 1;
const doctorApi = `https://6305c1c6dde73c0f844abb5d.mockapi.io/doctors/${doctorId}`;
$(document).ready(function () {
  $.get(doctorApi, function (data, status) {
    const handleRating = function (rate) {
      let html = "";
      for (let x = 0; x < rate; x++) {
        html += `<img src="./images/star.svg" alt="star" />`;
      }
      return html;
    };
    const initDoctorProfile = `
    <div class="dashboard__main__content__docprofile__header__bg">
      <img src="${data.background}" alt="background" />
    </div>
    <div class="dashboard__main__content__docprofile__header__group">
      <div class="dashboard__main__content__docprofile__header__group-child">
        <div class="dashboard__main__content__docprofile__header__avatar">
          <img src="${data.avatar}" alt="avatar" />
        </div>
        <div class="dashboard__main__content__docprofile__header__info">
          <div class="dashboard__main__content__docprofile__header__info__name titleDoc">${
            data.doctorName
          }</div>
          <div class="dashboard__main__content__docprofile__header__info__department cssText">${
            data.department
          }</div>
          <div class="dashboard__main__content__docprofile__header__info__workTime">
            <img src="/images/clock.svg" alt="clock" />
            <span>${data.workTimes}</span>
          </div>
        </div>
      </div>
      <div class="dashboard__main__content__docprofile__header__rating">
        ${handleRating(data.rating)}
        <div class="dashboard__main__content__docprofile__header__rating__review">5 from 32 reviews</div>
      </div>
    </div>
    `;
    $(".dashboard__main__content__docprofile__header").append(
      initDoctorProfile
    );
  });

  $(".dashboard__main__content__slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
  });

  $(".dashboard__nav__add").on("click", function () {
    $(".dashboard__main__content__slider").hide();
  });

  $(".calendar-wrapper").calendar({
    // date: new Date(),
  });

  function selectDate(date) {
    $("#calendar-wrapper").updateCalendarOptions({
      date: date,
    });
    // console.log(calendar.getSelectedDate());
  }
  let currentDay = new Date();
  let getDate = currentDay.getDate();
  let getMonth = currentDay.getMonth() + 1;
  let getYear = currentDay.getFullYear();
  let getYesterday = getMonth + "/" + getDate + "/" + getYear;

  var defaultConfig = {
    weekDayLength: 2,
    date: new Date(),
    onClickDate: selectDate,
    showYearDropdown: true,
    prevButton: "<",
    nextButton: ">",
    highlightSelectedWeekday: false,
    highlightSelectedWeek: false,
    startOnMonday: true,
    min: getYesterday,
  };

  var calendar = $("#calendar-wrapper").calendar(defaultConfig);
  // console.log(calendar.getSelectedDate());
});
