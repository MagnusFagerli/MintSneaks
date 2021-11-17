export async function renderProducts(products) {
  if (products.length === 0) {
    return (container.innerHTML = "No products found!");
  }

  container.innerHTML = "";

  products.forEach(function (product) {
    container.innerHTML += `<div class="product">
                                        <h2>${product.title}</h2></a>
                                        <h3>${product.description}</h3>
                                      </div>
                                        `;
  });
}
