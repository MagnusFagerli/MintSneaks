const container = document.querySelector(".product-container");
const apiUploadImg = "http://localhost:1337";

export function renderProducts(products) {
  container.innerHTML = "";

  products.forEach(function (products) {
    container.innerHTML += `
                            <div class="card" style="width: 18rem;">
                              <img src="${apiUploadImg}${products.image.formats.small.url}" class="card-img-top">
                              <div class="card-body">
                                <h5 class="card-title">${products.title}</h5>
                                <p>$${products.price}</p>
                                <a href="productdetail.html?id=${products.id}" class="btn btn-secondary">View</a>

                              </div>
                            </div>    
    `;
  });
}
