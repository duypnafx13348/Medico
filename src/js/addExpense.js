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

  $("#addExpense-form").validate({
    rules: {
      expenseHead: {
        required: true,
        rangelength: [3, 15],
      },
      amount: {
        required: true,
      },
      checkNumber: {
        required: true,
        number: true,
      },
    },
    messages: {
      expenseHead: {
        required: "This field is required.",
        rangelength: "Please enter a value between 3 and 15 characters long.",
      },
      amount: {
        required: "This field is required.",
      },
      checkNumber: {
        required: "This field is required.",
        number: "This field is number",
      },
    },
    submitHandler: handleSubmitExpense,
  });

  // $(".addExpense-submit").on("click", handleSubmitExpense);
});
