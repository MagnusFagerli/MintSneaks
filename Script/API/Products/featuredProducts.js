const container = document.querySelector(".featured-container");
// const apiUploadImg = "http://localhost:1337";

export function featuredProducts(products) {
  container.innerHTML = "";

  if (products.featured === true) {
    products.forEach(function (products) {
      container.innerHTML = `<div class="featured-product">
                            <h1>${products.title}</h1>
                            </div>`;
    });
  }
}

featuredProducts();
