import displayMessage from "../DisplayError/displayMessage.js";
import createMenu from "../AdminPage/adminMenu.js";
import { getToken } from "../../Utilities/storage.js";
import { baseUrl } from "../../API/apiUrl.js";

const form = document.querySelector(".form-group");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = price;
}
