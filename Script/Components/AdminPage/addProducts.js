import displayMessage from "../DisplayError/displayMessage.js";
import { getToken } from "../../Utilities/storage.js";
import { baseUrl } from "../../API/apiUrl.js";

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const message = document.querySelector(".message-container");
const image = document.querySelector("#image");
const featured = document.querySelector("#featured");

featured.value = false;
featured.addEventListener("click", clickFeatured);

function clickFeatured() {
  featured.value = true;
}
const newFeatured = featured.value;

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();
  const featuredValue = newFeatured;

  if (
    titleValue.length === 0 ||
    priceValue.length === 0 ||
    isNaN(priceValue) ||
    descriptionValue.length === 0
  ) {
    return displayMessage(
      "warning",
      "Please supply proper values",
      ".message-container"
    );
  }

  addProduct(titleValue, priceValue, descriptionValue, featuredValue);
}

async function addProduct(title, price, description) {
  const url = baseUrl + "products";

  const data = JSON.stringify({
    title: title,
    price: price,
    description: description,
    featured: featured.value,
  });

  const token = getToken();

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.created_at) {
      displayMessage("success", "Product created", ".message-container");
      form.reset();
    }

    if (json.error) {
      displayMessage("error", json.message, ".message-container");
    }

    console.log(json);
  } catch (error) {
    console.log(error);
    displayMessage("error", "An error occured", ".message-container");
  }
}
