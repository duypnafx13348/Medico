const doctorApi = "https://6305c1c6dde73c0f844abb5d.mockapi.io/doctors";
$(document).ready(function () {
  $.get(doctorApi, function (data, status) {
    const initAllDoctor = data.map((item) => {
      const handleRating = function (rate) {
        let html = "";
        for (let x = 0; x < rate; x++) {
          html += `<img src="./images/star.svg" alt="star" />`;
        }
        return html;
      };
      return `
      <div class="col-md-6 col-lg-6 dashboard__main__content__column">
        <div class="dashboard__main__content__box__item bg-card d-flex">
          <div class="dashboard__main__content__box__item__avatar">
            <img src="${item.avatar}" alt="avatar" />
          </div>
          <div class="dashboard__main__content__box__item__info">
            <div class="dashboard__main__content__box__item__info__title titleDoc">${
              item.doctorName
            }</div>
            <div class="dashboard__main__content__box__item__info__rating">${handleRating(
              item.rating
            )}</div>
            <input type="number" value=${
              item.id
            } id="doctorId" name="doctorId" hidden/>
            <div class="dashboard__main__content__box__item__info__department cssText">${
              item.department
            }</div>
            <div class="dashboard__main__content__box__item__info__workTime">
              <img src="./images/clock.svg" alt="clock" />
              <span>${item.workTimes}</span>
            </div>
            <div class="dashboard__main__content__box__item__info__biography">${
              item.biography
            }</div>
            <div class="dashboard__main__content__box__item__info__button">View Profile</div>
          </div>
        </div>
      </div>
    `;
    });
    $(".row.dashboard__main__content__box").append(initAllDoctor);

    $(".dashboard__main__content__box__item__info__button").on(
      "click",
      function () {
        const doctorId = $(this).parent().find("input").val();
        window.location.replace(`/doctorProfile.html?id=${doctorId}`);
      }
    );
  });
});
