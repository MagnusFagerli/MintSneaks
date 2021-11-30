import { getExistingCart } from "./getCart.js";
import { saveCart } from "./saveCart.js";

export function handleClick() {
  const id = this.dataset.id;
  const title = this.dataset.title;

  const currentCart = getExistingCart();

  const productExists = currentCart.find(function (cart) {
    return cart.id === id;
  });

  if (productExists === undefined) {
    const product = { id: id, title: title };
    currentCart.push(product);
    saveCart(currentCart);
  } else {
    const newCart = currentCart.filter((cart) => cart.id !== id);
    saveCart(newCart);
  }
}
