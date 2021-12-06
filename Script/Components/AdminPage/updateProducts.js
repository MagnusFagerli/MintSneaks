import { baseUrl } from "../../API/apiUrl.js";
import { getToken } from "../../Utilities/storage.js";
import displayMessage from "../DisplayError/displayMessage.js";

export async function updateProduct(title, price, description, id) {
  const url = baseUrl + "products/" + id;
  const data = JSON.stringify({
    title: title,
    price: price,
    description: description,
  });

  const token = getToken();

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);

    if (json.updated_at) {
      displayMessage("success", "Product updated", ".message-container");
    }

    if (json.error) {
      displayMessage("error", json.message, ".message-container");
    }
  } catch (error) {
    console.log(error);
  }
}
