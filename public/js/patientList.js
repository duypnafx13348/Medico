const apiPatient = "https://6305c1c6dde73c0f844abb5d.mockapi.io/patient";
$(document).ready(function () {
  $.get(apiPatient, function (data, status) {
    const initPatientList = data.map((item) => {
      console.log("item", item);
      return `
        <tr>
          <td>
            <input type="checkbox" name="checkbox" />
          </td>
          <td>${item.id}</td>
          <td>${item.patientName}</td>
          <td>${item.checkin}</td>
          <td>${item.doctorAssgined}</td>
          <td>${item.disease}</td>
          <td style="color: ${
            item.status == "New Patient"
              ? "#00BFAF"
              : item.status == "Recovered"
              ? "#00ACE2"
              : "#FF6864"
          }">${item.status}</td>
          <td>${item.roomNo}</td>
        </tr>
      `;
    });
    $("table#example tbody").append(initPatientList);

    $("#example").DataTable({
      response: true,
      language: {
        lengthMenu: "Showing _MENU_ data",
        info: "Showing _END_ from _TOTAL_ data",
      },
    });
    const handleClickPatientProfile = function () {
      const patientId = $(this).children("td:nth-child(2)").text();
      console.log(
        "hehe",
        `https://6305c1c6dde73c0f844abb5d.mockapi.io/patient/${patientId}`
      );
      window.location.replace(`patientProfile.html?id=${patientId}`);
    };

    $("table#example tbody tr").on("click", handleClickPatientProfile);
  });
});
