$(document).ready(function () {
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
  };

  $(".serviceInformation__card__box").on("click", handleClickPrice);
  $(".dashboard__main__content__item").on("click", handleClickList);
  $(".serviceInformation-next").on("click", handleClickServiceNext);
});