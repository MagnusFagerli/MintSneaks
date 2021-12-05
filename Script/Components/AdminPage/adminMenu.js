import { getUsername } from "../../Utilities/storage.js";

export default function createMenu() {
  const { pathname } = document.location;

  const container = document.querySelector(".menu-container");

  const username = getUsername();

  let authLink = `<a href="login.html" class="${
    pathname === "/login.html" ? "active" : ""
  }">Login</a>`;

  if (username) {
    authLink = `<span class="usergreet">Hi, ${username}!</span> <button class="btn btn-secondary" id="logoutbtn">Log Out</button>`;
  }

  container.innerHTML = `<div class="menu">
                          ${authLink}
                          <ul class="nav">
                          <li class="nav-item">
                            <a class="nav-link" href="adminadd.html">Add Products</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="adminedit.html">Edit Products</a>
                          </li></ul>
                        </div>`;
}
