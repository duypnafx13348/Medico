const pathName = location.pathname.slice(1);

$(document).ready(function () {
  const activeSideBar = $(`a[href="${pathName}"]`).addClass("active");
  $(`a[href="${pathName}"]`)
    .closest(".dashboard__main__sidebar__item")
    .find("svg path")
    .attr("fill", "#605BFF");
  if (activeSideBar.closest(".dashboard__main__sidebar__list-child")) {
    activeSideBar
      .closest(".dashboard__main__sidebar__item")
      .find(".dashboard__main__sidebar__item-event .d-flex a.link")
      .addClass("active");
    activeSideBar
      .closest(".dashboard__main__sidebar__item")
      .find(".dashboard__main__sidebar__item-event i")
      .addClass("active")
      .css("transform", "rotate(90deg)");
    activeSideBar
      .closest(".dashboard__main__sidebar__item")
      .find(".dashboard__main__sidebar__item-event .d-flex svg")
      .addClass("active");
    activeSideBar.closest(".dashboard__main__sidebar__list-child").show();
  }

  const handleAddPatientNavbar = function () {
    window.location.replace("/addNewPatient.html");
  };

  const handleClickSideBar = function () {
    var existListChild = $(this)
      .parent()
      .children("ul.dashboard__main__sidebar__list-child");

    if (existListChild.length > 0) {
      $(this).find(".align-items-start svg path").attr("fill", "#605BFF");
      existListChild.slideToggle(function () {
        var checkListChild = $(this).attr("style");
        var checkArrow = $(this)
          .parent()
          .find(".dashboard__main__sidebar__item-event i");
        if (checkListChild.includes("block")) {
          checkArrow.css("transform", "rotate(90deg)");
          $(this)
            .parent()
            .find(".dashboard__main__sidebar__item-event i")
            .addClass("active");
          $(this)
            .parent()
            .find(".dashboard__main__sidebar__item-event div.d-flex a.link")
            .addClass("active");
        } else {
          $(this)
            .closest(".dashboard__main__sidebar__item")
            .find(
              ".dashboard__main__sidebar__item-event .align-items-start svg path"
            )
            .attr("fill", "#70708C");
          $(this)
            .parent()
            .find(".dashboard__main__sidebar__item-event div.d-flex a.link")
            .removeClass("active");
          $(this)
            .parent()
            .find(".dashboard__main__sidebar__item-event i")
            .removeClass("active");
          $(this).children().removeClass("active");
          checkArrow.css("transform", "rotate(0deg)");
        }
      });
    }
  };

  const handleListChild = function () {
    console.log("hehe", $(this));
    $(".dashboard__main__sidebar__item-child").removeClass("active");
    $(this).addClass("active");
  };

  $(".dashboard__nav__add").on("click", handleAddPatientNavbar);
  $(".dashboard__main__sidebar__item-event").on("click", handleClickSideBar);
  $(".dashboard__main__sidebar__item-child").on("click", handleListChild);
});
