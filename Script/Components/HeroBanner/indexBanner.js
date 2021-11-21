import { baseUrl } from "../../API/apiUrl.js";
const apiUploadImg = "http://localhost:1337";

const bannerUrl = baseUrl + "home";
const container = document.querySelector(".jumboimg");

async function fetchBanner() {
  try {
    const response = await fetch(bannerUrl);
    const banner = await response.json();

    container.innerHTML = `<img class="jumboimg" src="${apiUploadImg}${banner.hero_banner.formats.medium.url}">
                           <p class="hero-alt"><i>We are shipping from the beautiful ${banner.hero_banner_alt_text}.</p>     
    `;
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".jumboimg");
  }
}
fetchBanner();
