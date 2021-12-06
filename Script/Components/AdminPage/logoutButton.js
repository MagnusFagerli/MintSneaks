import { clearStorage } from "../../Utilities/storage.js";

export default function logoutButton() {
  const button = document.querySelector("#logoutbtn");

  if (button) {
    button.onclick = function () {
      const doLogout = confirm("Do you want to log out?");

      if (doLogout) {
        clearStorage();
        location.href = "/";
      }
    };
  }
}
