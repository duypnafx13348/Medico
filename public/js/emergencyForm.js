const api = "https://6305c1c6dde73c0f844abb5d.mockapi.io/emergency";

$(document).ready(function () {
  const emergencyForm = {};
  const data = [];
  const handleTotalPrice = function () {
    var totalCoin = 0;
    var lengthPrice = $("#myTable tbody .price");
    for (var i = 0; i < lengthPrice.length; i++) {
      const slicePrice = new Number(lengthPrice[i].textContent.slice(1));
      totalCoin += slicePrice;
    }
    $("#myTable tfoot td:last-child").text(`$${totalCoin}`);
  };
  const handleClickPrice = function () {
    var itemId = $(this).attr("id");
    var serviceName = $(this)
      .children(".serviceInformation__card__header__name")
      .text();
    var servicePrice = $(this)
      .children(".serviceInformation__card__header__price")
      .text();
    const existId = data.some((item) => {
      if (item.id == itemId) {
        item.quantity++;
        const newPrice = item.servicePrice.slice(1);
        item.amount = newPrice * item.quantity;
        return true;
      }
      return false;
    });

    if (!existId) {
      data.push({
        id: itemId,
        serviceName: serviceName,
        servicePrice: servicePrice,
        quantity: 1,
        amount: servicePrice,
      });
      var tr = data.map((item) => {
        if (item.id == itemId) {
          return `
            <tr ref=${itemId}>
              <td class="sl">
                <input class="cssText" type="number" value="${item.quantity}" step="1" min=0 />
              </td>
              <td class="name cssText">${item.serviceName}</td>
              <td class="price cssText">${item.amount}</td>
            </tr>
          `;
        }
      });
      $("#myTable tbody").append(tr);
      $(`#myTable tr[ref=${itemId}] input`).on("change", handleChange);
    } else {
      $(`tr[ref=${itemId}] td:first-child input`).val(
        data
          .map((item) => {
            if (item.id == itemId) {
              return item.quantity;
            }
          })
          .join("")
      );
      $(`tr[ref=${itemId}] td:last-child`).text(
        data
          .map((item) => {
            if (item.id == itemId) {
              return `$${item.amount}`;
            }
          })
          .join("")
      );
    }

    handleTotalPrice();
  };

  const handleClickList = function () {
    const valueTextItem = $(this).text();
    switch (valueTextItem) {
      case "Service Information":
        $(".personalInformation").hide();
        $(".payment.row").hide();
        $(".serviceInformation").fadeIn();
        $(".dashboard__main__content__item").removeClass("active");
        $(this).addClass("active");
        break;
      case "Payment":
        $(".serviceInformation").hide();
        $(".personalInformation").hide();
        $(".payment.row").css("display", "flex");
        $(".dashboard__main__content__item").removeClass("active");
        $(this).addClass("active");
        break;
      default:
        $(".payment.row").hide();
        $(".serviceInformation").hide();
        $(".personalInformation").show();
        $(".dashboard__main__content__item").removeClass("active");
        $(this).addClass("active");
    }
  };

  const handleChange = function () {
    const itemId = $(this).parent().parent().attr("ref");
    if ($(`#myTable tr[ref=${itemId}] td:first-child input`).val() == 0) {
      $(`#myTable tr[ref=${itemId}]`).remove();
      const filterData = data.filter((item) => item.id == itemId);
      const indexOfData = data.indexOf(filterData[0]);
      data.splice(indexOfData, 1);
      handleTotalPrice();
    }
    data.some((item) => {
      if (item.id == itemId) {
        item.quantity = $(
          `#myTable tr[ref=${itemId}] td:first-child input`
        ).val();
        const newPrice = item.servicePrice.slice(1);
        item.amount = newPrice * item.quantity;
        $(`#myTable tr[ref=${itemId}] td:last-child`).text(`$${item.amount}`);
        handleTotalPrice();
        return data;
      }
    });
  };

  const handleClickServiceNext = function () {
    const valueTotalPrice = $("#myTable tfoot td:last-child").text();
    $(".serviceInformation").hide();
    $(".dashboard__main__content__item").removeClass("active");
    $(".dashboard__main__content__item:last-child").addClass("active");
    $(".payment").css("display", "flex");
    $("#subTotal").val(valueTotalPrice);
    $("#discount").val("10%");
    const valueDiscount = $("#discount").val();
    const numberPrice = new Number(valueTotalPrice.slice(1));
    const sliceDiscount = new Number(valueDiscount.split("%")[0]);
    $("#less").val((numberPrice * sliceDiscount) / 100);
    $("#grandTotal").val(
      new Number(valueTotalPrice.slice(1)) - $("#less").val()
    );
    $("#paidAmount").val($("#grandTotal").val());
    $("#due").val(0);
    console.log("service", emergencyForm);
  };

  const handlePersionalNext = function () {
    const valueForm = $("#personalInformation-form").serializeArray();
    valueForm.forEach((item) => {
      emergencyForm[item.name] = item.value;
    });
    $(".personalInformation").hide();
    $(".serviceInformation").fadeIn(500);
    $(".dashboard__main__content__item").removeClass("active");
    $(".dashboard__main__content__item:nth-child(2)").addClass("active");
    console.log("per", emergencyForm);
  };

  $("#personalInformation-form").validate({
    rules: {
      patientName: {
        required: true,
        rangelength: [3, 15],
      },
      phoneNumberP: {
        required: true,
        number: true,
        rangelength: [8, 11],
      },
      addressP: {
        required: true,
      },
      ageP: {
        required: true,
        number: true,
        min: 1,
        max: 99,
      },
      guardianName: {
        required: true,
        rangelength: [3, 15],
      },
      phoneNumberG: {
        required: true,
        number: true,
        rangelength: [8, 11],
      },
      addressG: {
        required: true,
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
      guardianName: {
        required: "This field is required.",
        rangelength: "Please enter a value between 3 and 15 characters long.",
      },
      phoneNumberG: {
        required: "This field is required.",
        number: "This field is number.",
        rangelength: "Please enter a value between 8 and 11 characters long.",
      },
      addressG: {
        required: "This field is required.",
      },
    },
    submitHandler: handlePersionalNext,
  });

  const handlePaymentSubmit = function () {
    $.post(api, emergencyForm, function (data) {
      console.log("data", data);
      window.location.replace("emergencyList.html");
    });
  };

  $(".serviceInformation__card__box").on("click", handleClickPrice);
  $(".dashboard__main__content__item:first-child").on("click", handleClickList);
  $(".serviceInformation-next").on("click", handleClickServiceNext);
  $(".payment-submit").on("click", handlePaymentSubmit);
});
