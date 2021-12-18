import { getExistingCart } from "../Cartfuntions/getCart.js";
const deleteBtn = document.querySelector("#remove");

export default function deleteCartItem() {
  if (deleteBtn) {
    deleteBtn.onclick = function () {
      const doDelete = confirm("Do you want to remove this product?");

      if (doDelete) {
        //localStorage.removeItem(cart);
        localStorage.clear();
        location.reload();
      }
    };
  }
}
