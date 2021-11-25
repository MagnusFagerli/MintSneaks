import { getUsername } from "../../Utilities/storage.js";

export default function createMenu() {
  const { pathname } = document.location;

  const container = document.querySelector(".menu-container");

  const username = getUsername();

  let authLink = `<a href="login.html" class="${
    pathname === "/login.html" ? "active" : ""
  }">Login</a>`;

  if (username) {
    authLink = `<span class="usergreet">Hi, ${username}!</span>`;
  }

  container.innerHTML = `<div class="menu">
                                ${authLink}
                                <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li></ul>
                        </div>`;
}
