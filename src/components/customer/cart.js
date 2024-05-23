import Swal from "sweetalert2";
import "animate.css";

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addCart() {
  document.getElementById("add-to-cart").onclick = () => {
    const image = document.getElementById("product_image").value;
    const product_id = document.getElementById("product_id").value;
    const name = document.getElementById("product_name").value;
    const price = document.getElementById("price").value;
    const quantity = parseInt(document.getElementById("quantity").value);

    let cartExists = false;

    const cartItem = {
      image,
      product_id,
      name,
      price,
      quantity,
    };

    cart.forEach((item) => {
      if (item.product_id == product_id) {
        cartExists = true;
        item.quantity = item.quantity + quantity;
        localStorage.setItem("cart", JSON.stringify(cart));

        Swal.fire({
          title: "Success!",
          text: "Added to cart!",
          icon: "success",
          showConfirmButton: false,
          timer: 1200,
          showClass: {
            popup: `
						animate__animated
						animate__fadeInDown
						animate__faster
					  `,
          },
          hideClass: {
            popup: `
						animate__animated
						animate__fadeOutUp
						animate__faster
					  `,
          },
        });
      }
    });

    if (!cartExists) {
      cart.push(cartItem);

      localStorage.setItem("cart", JSON.stringify(cart));

      Swal.fire({
        title: "Success!",
        text: "Added to cart!",
        icon: "success",
        showConfirmButton: false,
        timer: 1200,
        showClass: {
          popup: `
                    animate__animated
                    animate__fadeInDown
                    animate__faster
                  `,
        },
        hideClass: {
          popup: `
                    animate__animated
                    animate__fadeOutUp
                    animate__faster
                  `,
        },
      });
    }
  };
}

function addCartAll() {
  document.querySelectorAll(".add-to-cart").forEach((item) => {
    item.onclick = function () {
      const parentDiv = item.closest(".product-item"); // Tìm phần tử cha gần nhất có class là 'product-item'
      const image = parentDiv.querySelector(".product_image").value;
      const product_id = parentDiv.querySelector(".product_id").value;
      const name = parentDiv.querySelector(".product_name").value;
      const price = parentDiv.querySelector(".price").value;
      const quantity = parseInt(parentDiv.querySelector(".quantity").value);

      let cartExists = false;

      const cartItem = {
        image,
        product_id,
        name,
        price,
        quantity,
      };

      cart.forEach((item) => {
        if (item.product_id == product_id) {
          cartExists = true;
          item.quantity = item.quantity + quantity;
          localStorage.setItem("cart", JSON.stringify(cart));

          Swal.fire({
            title: "Success!",
            text: "Added to cart!",
            icon: "success",
            showConfirmButton: false,
            timer: 1200,
            showClass: {
              popup: `
							animate__animated
							animate__fadeInDown
							animate__faster
						`,
            },
            hideClass: {
              popup: `
							animate__animated
							animate__fadeOutUp
							animate__faster
						`,
            },
          });
        }
      });

      if (!cartExists) {
        cart.push(cartItem);

        localStorage.setItem("cart", JSON.stringify(cart));

        Swal.fire({
          title: "Success!",
          text: "Added to cart!",
          icon: "success",
          showConfirmButton: false,
          timer: 1200,
          showClass: {
            popup: `
						animate__animated
						animate__fadeInDown
						animate__faster
					`,
          },
          hideClass: {
            popup: `
						animate__animated
						animate__fadeOutUp
						animate__faster
					`,
          },
        });
      }

      console.log(product_id);
    };
  });
}

function layoutTbody({ product_id, image, name, price, quantity }) {
  return `
		<tr class="text-center">
					<td
					class="product-remove d-flex align-items-center"
					style="padding: 40px 10px"
					>
					<button style="border: none; background-color: #fff;" class="remove-cart text-danger" id="${product_id}"><i class="fa-solid fa-trash"></i></button>
					</td>

					<td class="image-prod">
					<img style="width: 100px" src="${image}" alt="" />
					</td>

					<td class="product-name">
					<h3>${name}</h3>
					<p>
						Far far away, behind the word mountains, far from the
						countries
					</p>
					</td>

					<td class="price">$${Math.floor(price)}.00</td>

					<td class="quantity">
					<div class="d-flex mb-3">
            <button style="border: none;" class="fs-3 decreasing bg-white" data-product-id="${product_id}">-</button>
						<input style="width: 50px;"
            id="quantity${product_id}"
						type="text"
						name="quantity"
						class="quantity form-control input-number"
						value="${quantity}"
						min="1"
						max="100"
						/>
            <button style="border: none;" class="fs-3 increasing bg-white" data-product-id="${product_id}">+</button>
					</div>
					</td>

					<td class="total" id="total${product_id}">$${Math.floor(quantity * price)}.00</td>
				</tr>
		`;
}

function increasing() {
  document.querySelectorAll('.increasing').forEach(button => {
    button.onclick = async function() {
      const productId = this.getAttribute('data-product-id');
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      let quantityInput = document.querySelector('#quantity' + productId);

      let quantity = parseInt(quantityInput.value);
      quantity++;
      quantityInput.value = quantity;

      cart = cart.map(item => {
        if (item.product_id === productId) {
          item.quantity = quantity;
        }
        return item;
      });

      localStorage.setItem('cart', JSON.stringify(cart));

      // Gọi loadCart để cập nhật giỏ hàng hiển thị mà không cần tải lại trang
      await loadCart();
    }
  });
}

function decreasing() {
  document.querySelectorAll('.decreasing').forEach(button => {
    button.onclick = async function() {
      const productId = this.getAttribute('data-product-id');
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      let quantityInput = document.querySelector('#quantity' + productId);

      let quantity = parseInt(quantityInput.value);
      if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;

        cart = cart.map(item => {
          if (item.product_id === productId) {
            item.quantity = quantity;
          }
          return item;
        });

        localStorage.setItem('cart', JSON.stringify(cart));

        // Gọi loadCart để cập nhật giỏ hàng hiển thị mà không cần tải lại trang
        await loadCart();
      }
    }
  });
}

function removeCart() {
  document.querySelectorAll(".remove-cart").forEach((item) => {
    item.onclick = function () {
      let product_id = this.id;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].product_id == product_id) {
          cart.splice(i, 1);
          Swal.fire({
            title: "Success!",
            text: "Added to cart!",
            icon: "success",
            showConfirmButton: false,
            timer: 1200,
            showClass: {
              popup: `
                  animate__animated
                  animate__fadeInDown
                  animate__faster
                `,
            },
            hideClass: {
              popup: `
                  animate__animated
                  animate__fadeOutUp
                  animate__faster
                `,
            },
          });
          break;
        }
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      loadCart();
    };
  });
} 

async function loadCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length > 0) {
    let delivery = 0; 
    let totalPrice = 0; 
    let subtotal = 0;
    let discount = 0;
    let htmls = cart.map((item) => {
      let total = item.price * item.quantity;
      discount += item.quantity;
      subtotal += total;
      return layoutTbody(item);
    }).join("");
    delivery = subtotal > 100 ? 0 : 10;
    totalPrice = subtotal + delivery;
    document.querySelector("tbody").innerHTML = htmls;
    document.getElementById('subtotal').innerText = '$' + Math.floor(subtotal) + '.00';
    document.getElementById('delivery').innerText = delivery > 0 ? '$' + delivery + '.00' : 'Free Shipping';
    document.getElementById('discount').innerText = discount;
    document.getElementById('total').innerText = '$' + Math.floor(totalPrice) + '.00';
  } else {
    document.getElementById('cart-content').innerHTML = "<h2 class='text-center py-5'>Cart is empty!</h2>";
  }

  removeCart();
  await increasing(); // Gán sự kiện cho các nút tăng số lượng
  await decreasing(); // Gán sự kiện cho các nút giảm số lượng
}
export { addCart, addCartAll };
export default loadCart;
