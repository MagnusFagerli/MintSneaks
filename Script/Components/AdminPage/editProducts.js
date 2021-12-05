import displayMessage from "../DisplayError/displayMessage";

const apiUploadImg = "http://localhost:1337";
const container = document.querySelector(".product-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "http://localhost:1337/products/" + id;
