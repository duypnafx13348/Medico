const api = "https://6305c1c6dde73c0f844abb5d.mockapi.io/emergency";

$(document).ready(function () {
  $.get(api, function (data, status) {
    const initEmergencyList = data.map((item) => {
      console.log("item", item);
      const random = Math.ceil(Math.random() * 3);
      return `
        <tr>
          <td>
            <input type="checkbox" name="checkbox" />
          </td>
          <td>${item.id}</td>
          <td>${item.patientName}</td>
          <td>${item.checkin}</td>
          <td>${
            random == 1
              ? "Ai chữa thì chữa"
              : random == 2
              ? "Dr.Mike"
              : "Dr.Alice"
          }</td>
          <td>${
            random == 1
              ? "Cold & Flu"
              : random == 2
              ? "Đau Bụng"
              : "Sốt Xuất Huyết"
          }</td>
          <td style="color: ${
            item.status == "New Patient"
              ? "#00BFAF"
              : item.status == "Recovered"
              ? "#00ACE2"
              : "#FF6864"
          }">${
        random == 1 ? "New Patient" : random == 2 ? "Recovered" : "In Treatment"
      }</td>
          <td>D-105</td>
        </tr>
      `;
    });
    $("table#emergencyTable tbody").append(initEmergencyList);

    $("#emergencyTable").DataTable({
      response: true,
      language: {
        lengthMenu: "Showing _MENU_ data",
        info: "Showing _END_ from _TOTAL_ data",
      },
    });
  });
});
