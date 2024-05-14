import axios from "axios";
import { addCart } from "./cart";

const axios_ins = axios.create({
    baseURL: "https://my-project-29fd5-default-rtdb.firebaseio.com",
});


function layoutHtml({product_id, name, description,  price, new_price, image, discount}) {
    return `
    		<div class="row f-flex justify-content-between">
    			<div class="col-lg-5 mb-5 ftco-animate my-5">
    				<a href="" class="image-popup"><img src="${image}" class="img-fluid w-100" alt="Colorlib Template"></a>
    			</div>
    			<div class="col-lg-6 product-details pl-md-5 ftco-animate mt-5">
    				<h3>${name}</h3>
    				<div class="rating d-flex">
							<p class="text-left mr-4">
								<a href="#" class="mr-2">5.0</a>
								<a href="#"><span class="ion-ios-star-outline"></span></a>
								<a href="#"><span class="ion-ios-star-outline"></span></a>
								<a href="#"><span class="ion-ios-star-outline"></span></a>
								<a href="#"><span class="ion-ios-star-outline"></span></a>
								<a href="#"><span class="ion-ios-star-outline"></span></a>
							</p>
							<p class="text-left mr-4">
								<a href="#" class="mr-2" style="color: #000;">100 <span style="color: #bbb;">Rating</span></a>
							</p>
							<p class="text-left">
								<a href="#" class="mr-2" style="color: #000;">500 <span style="color: #bbb;">Sold</span></a>
							</p>
						</div>
    				<p class="price"><span>$${Math.floor(new_price)+'.00'}</span></p>
    				<div>${description}
						</div>
						<div class="row mt-4">
							<div class="col-md-6">
								<div class="form-group d-flex">
		              <div class="select-wrap">
	                  <div class="icon"><span class="ion-ios-arrow-down"></span></div>
	                  <select name="" id="" class="form-control">
	                  	<option value="">Small</option>
	                    <option value="">Medium</option>
	                    <option value="">Large</option>
	                    <option value="">Extra Large</option>
	                  </select>
	                </div>
		            </div>
							</div>
							<div class="w-100"></div>
							<div class="d-flex mt-3 mb-3">
	             	<span class="input-group-btn mr-2">
	                	<button id="reduce" style="border-color: #ccc;" type="button" class="quantity-left-minus btn border-1"  data-type="minus" data-field="">
							<i class="fa-solid fa-minus"></i>
	                	</button>
	            		</span>
	             	<input style="width: 80px;" type="text" id="quantity-2" name="quantity" class="form-control input-number text-center" value="1" min="1" max="100">
	             	<span class="input-group-btn ml-2">
	                	<button id="increasing" style="border-color: #ccc;" type="button" class="quantity-right-plus btn border-1" data-type="plus" data-field="">
							<i class="fa-solid fa-plus"></i>
	                 </button>
	             	</span>
	          	</div>
	          	<div class="w-100"></div>
	          	<div class="col-md-12">
	          		<p style="color: #000;">600 kg available</p>
	          	</div>
          	</div>
				<p>
					<input value="${image}" type="hidden" id="product_image">
					<input value="${product_id}" type="hidden" id="product_id">
					<input value="${name}" type="hidden" id="product_name">
					<input value="${new_price}" type="hidden" id="price">
					<input value="1" type="hidden" id="quantity">
					<button id="add-to-cart" class="btn btn-primary py-3 px-5">Add to Cart</button>
				</p>
    		</div>
    		</div>
    `;
}

function layoutProducts({product_id,name, price, new_price, image, discount}) {
    return `
    <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="product-item">
            <div class="position-relative bg-light overflow-hidden">
                <img class="img-fluid w-100" src="${image}" alt="">
                <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
            </div>
            <div class="text-center p-4">
                <a href="/productdetail/${product_id}" data-navigo class="d-block h5 mb-2">${name}</a>
                <span class="text-primary me-1">$${Math.floor(new_price)+'.00'}</span>
                <span class="text-body text-decoration-line-through">${discount > 0 ? '$'+Math.floor(price)+'.00' : ''}</span>
            </div>
            <div class="d-flex border-top">
                <small class="w-50 text-center border-end py-2">
                    <a href="/productdetail/${product_id}" class="text-body" data-navigo><i class="fa fa-eye text-primary me-2"></i>View detail</a>
                </small>
                <small class="w-50 text-center py-2">
                    <input value="${image}" type="hidden" class="product_image">
					<input value="${product_id}" type="hidden" class="product_id">
					<input value="${name}" type="hidden" class="product_name">
					<input value="${new_price}" type="hidden" class="price">
					<input value="1" type="hidden" class="quantity">
                    <button style="border: none; background-color: #fff;" class="text-body add-to-cart"><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</button>
                </small>
            </div>
        </div>
    </div>
    `;
}

function increasing() {
	document.getElementById('increasing').onclick = () => {
		let quantityElement = document.getElementById('quantity');
		let quantity_2_Element = document.getElementById('quantity-2');

		let quantity = parseInt(quantityElement.value);
		let quantity_2 = parseInt(quantity_2_Element.value);

		quantity++;
		quantity_2++;

		if (quantity_2 >= 100) {
			quantity_2 = 100;
			quantity = 100;
		}

		quantityElement.value = quantity;
		quantity_2_Element.value = quantity_2;
	}
}

function reduce() {
	document.getElementById('reduce').onclick = () => {
		let quantityElement = document.getElementById('quantity');
		let quantity_2_Element = document.getElementById('quantity-2');

		let quantity = parseInt(quantityElement.value);
		let quantity_2 = parseInt(quantity_2_Element.value);

		quantity--;
		quantity_2--;

		if (quantity_2 <= 0) {
			quantity_2 = 1;
			quantity = 1;
		}

		quantityElement.value = quantity;
		quantity_2_Element.value = quantity_2;
	}
}

async function productSame(id) {
	let response = await axios_ins.get(`/products.json`);

	let products = response.data;
	let count = 0;
    let maxProducts = 6;
	let trstring = "";

	for (let key in products) {
		if (products.hasOwnProperty(key)) {
			if (key != id) {
				count++;
				if (count >= maxProducts) {
					break;
				} 
				trstring += layoutProducts(products[key]);
			}
		}
	}

	document.querySelector('#page-product-single').innerHTML = trstring;
}


async function getProductId(id) {

    let response = await axios_ins.get(`/products/${id}.json`);

    let htmls = layoutHtml(response.data);

    document.getElementById('content-product').innerHTML = htmls;

	addCart();
	increasing();
	reduce();
	await productSame(id);
}

export default getProductId;
