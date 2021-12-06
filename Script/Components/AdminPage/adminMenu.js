import { getUsername } from "../../Utilities/storage.js";
import logoutButton from "../AdminPage/logoutButton.js";

export default function createMenu() {
  const { pathname } = document.location;

  const container = document.querySelector(".menu-container");

  const username = getUsername();

  let authLink = `<a href="adminlogin.html" class="${
    pathname === "/adminlogin.html" ? "active" : ""
  }">Login</a>`;

  if (username) {
    authLink = `<span class="usergreet">Hi, ${username}!</span>`;
  }

  container.innerHTML = `<div class="adminmenu-top">${authLink} <button class="btn btn-secondary" id="logoutbtn">Log Out</button></div>
                          <div class="menu">
                          <ul class="nav">
                          <li class="nav-item">
                            <a class="nav-link" href="adminadd.html">Add Products</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="adminpage.html">View Products</a>
                          </li></ul>
                        </div>`;
}

createMenu();
logoutButton();
