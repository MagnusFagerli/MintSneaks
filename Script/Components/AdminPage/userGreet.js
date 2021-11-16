import { getUsername } from "../utilities/storage.js";

export default function createGreet() {
  const { pathname } = document.location;

  const container = document.querySelector(".menu-container");

  const username = getUsername();

  let authLink = `<a href="login.html" class="${
    pathname === "/login.html" ? "active" : ""
  }">Login</a>`;

  if (username) {
    authLink = `<span>Hi, ${username}!</span>`;
  }

  //console.log(username);

  container.innerHTML = `<div class="menu">
                                <a href="/" class="${
                                  pathname === "/" ? "active" : ""
                                }">Home</a>
                                ${authLink}
                        </div>`;
}

/// This is not final, has to be suited for this project.
