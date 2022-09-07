const apiExpense = "https://6305c1c6dde73c0f844abb5d.mockapi.io/expense";

$(document).ready(function () {
  $.get(apiExpense, function (data) {
    const initExpenseList = data.map((item) => {
      console.log("item", item);
      return `
        <tr>
          <td>
            <input type="checkbox" name="checkbox" />
          </td>
          <td>${item.expenseHead}</td>
          <td>${item.selectCategory}</td>
          <td>${item.amount}</td>
          <td>${item.date}</td>
          <td>${item.bankAccount}</td>
          <td>${item.checkNumber}</td>
          <td style="color: #00BFAF">View Details</td>
        </tr>
      `;
    });
    $("table#expenseListTable tbody").append(initExpenseList);

    $("#expenseListTable").DataTable({
      response: true,
      language: {
        lengthMenu: "Showing _MENU_ data",
        info: "Showing _END_ from _TOTAL_ data",
      },
    });
  });
});
