import displayMessage from "../DisplayError/displayMessage.js";
import { getToken } from "../../Utilities/storage.js";
import { baseUrl } from "../../API/apiUrl.js";

const form = document.getElementById("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const message = document.querySelector(".message-container");
const image = document.querySelector("#imageUpload");
const featured = document.querySelector("#featured");

featured.value = false;
featured.addEventListener("click", clickFeatured);

function clickFeatured() {
  featured.value = true;
}
const newFeatured = featured.value;

form.addEventListener("submit", uploadProduct);

async function uploadProduct(event) {
  event.preventDefault();

  const form = event.target;
  const token = getToken();
  const url = baseUrl + "products";

  try {
    const response = await fetch(url, {
      method: "POST",
      body: new FormData(form),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    if (json.created_at) {
      displayMessage("success", "Product created", ".message-container");
      form.reset();
    }

    if (json.error) {
      displayMessage("error", json.message, ".message-container");
    }

    console.log(json);
  } catch (error) {
    console.warn(error);
  }
}
