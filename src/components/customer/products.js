import axios from "axios";

const axios_ins = axios.create({
    baseURL: "https://my-project-29fd5-default-rtdb.firebaseio.com",
});

function layoutProducts({name, price, new_price, image, discount}) {
    return `
    <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="product-item">
            <div class="position-relative bg-light overflow-hidden">
                <img class="img-fluid w-100" src="${image}" alt="">
                <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
            </div>
            <div class="text-center p-4">
                <a class="d-block h5 mb-2" href="">${name}</a>
                <span class="text-primary me-1">$${Math.floor(new_price)+'.00'}</span>
                <span class="text-body text-decoration-line-through">${discount > 0 ? '$'+Math.floor(price)+'.00' : ''}</span>
            </div>
            <div class="d-flex border-top">
                <small class="w-50 text-center border-end py-2">
                    <a class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</a>
                </small>
                <small class="w-50 text-center py-2">
                    <a class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                </small>
            </div>
        </div>
    </div>
    `;
}

async function loadAllProducts() {
    let listProducts = await axios_ins.get('/products.json');
    let data = listProducts.data;
    let str = '';

    Object.keys(data).forEach((item) => {
        const product = data[item];
        str += layoutProducts(product);
    })
    
    document.getElementById('all').innerHTML = str;
}

async function loadVegetables() {
    let listProducts = await axios_ins.get('/products.json');
    let data = listProducts.data;
    let str = '';

    Object.keys(data).forEach((item) => {
        if (data[item]['category_id'] == '-NrM-RlKRmLiKXUlJtRE') {
            const product = data[item];
            str += layoutProducts(product);
        }
    })
    
    document.getElementById('vegetables').innerHTML = str;
}

async function loadFruits() {
    let listProducts = await axios_ins.get('/products.json');
    let data = listProducts.data;
    let str = '';

    Object.keys(data).forEach((item) => {
        if (data[item]['category_id'] == '-NrM03_xKfGzjAJ0KXTl') {
            const product = data[item];
            str += layoutProducts(product);
        }
    })
    
    document.getElementById('fruits').innerHTML = str;
}

async function loadJuice() {
    let listProducts = await axios_ins.get('/products.json');
    let data = listProducts.data;
    let str = '';

    Object.keys(data).forEach((item) => {
        if (data[item]['category_id'] == '-NrM0Hv-P4OE6ZipScAj') {
            const product = data[item];
            str += layoutProducts(product);
        }
    })
    
    document.getElementById('juice').innerHTML = str;
}


async function loadProducts_2() {
    loadAllProducts();
    loadVegetables();
    loadFruits();
    loadJuice();
}

export default loadProducts_2;