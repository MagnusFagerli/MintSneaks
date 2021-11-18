const container = document.querySelector(".product-container");

export function renderProducts(products) {
  container.innerHTML = "";

  products.forEach(function (products) {
    container.innerHTML += `
                            <div class="card" style="width: 18rem;">
                              <img src="${products.image}" class="card-img-top">
                              <div class="card-body">
                                <h5 class="card-title">${products.title}</h5>
                                <p>Price: ${products.price}</p>
                                <a href="#" class="btn btn-primary">View</a>
                              </div>
                            </div>    
    `;
  });
}
