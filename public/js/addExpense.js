const apiExpense = "https://6305c1c6dde73c0f844abb5d.mockapi.io/expense";

$(document).ready(function () {
  const newObjectForm = {};
  const handleSubmitExpense = function () {
    const formValueArray = $("form.addExpense-form").serializeArray();
    formValueArray.map((item) => {
      return (newObjectForm[item.name] = item.value);
    });
    $.post(apiExpense, newObjectForm, function () {
      console.log("formValue", formValueArray);
      console.log("newObjectForm", newObjectForm);
      console.log("POSTED");
      window.location.replace("/expenseList.html");
    });
  };

  $(".addExpense-submit").on("click", handleSubmitExpense);
});
