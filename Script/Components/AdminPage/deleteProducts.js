import { baseUrl } from "../../API/apiUrl.js";
import { getToken } from "../../Utilities/storage.js";

export default function deleteButton(id) {
  const container = document.querySelector(".delete-container");

  container.innerHTML = `<button type="button" class="btn btn-danger" id="deletebtn">Delete</button>`;

  const button = document.querySelector("#deletebtn");

  button.onclick = async function () {
    const doDelete = confirm("Are you sure you want to delete this?");

    if (doDelete) {
      const url = baseUrl + "products/" + id;

      const token = getToken();

      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(url, options);
        const json = await response.json();

        location.href = "/adminpage.html";

        console.log(json);
      } catch (error) {
        console.log(error);
      }
    }
  };
}
