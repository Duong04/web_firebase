import axios from "axios";
import Swal from 'sweetalert2';
import 'animate.css';

const axios_ins = axios.create({
    baseURL: "https://my-project-29fd5-default-rtdb.firebaseio.com",
});

function layoutSelected({category_id, category_name}) {
    return `<option value="${category_id}">${category_name}</option>`;
}

function layoutProduct({product_id, name, image, price, new_price, discount}, key) {
    return `
        <tr>
            <td>${product_id}</td>
            <td>${name}</td>
            <td><img style="width: 100px;" src="${image}" alt=""></td>
            <td>$${Math.floor(price)}.00</td>
            <td>$${Math.floor(new_price)}.00</td>
            <td>-${discount > 0 ? discount : 0}%</td>
            <td>
                <button id="${key}" class="btn btn-warning update-product" data-bs-toggle="modal" data-bs-target="#update">Edit</button>
                <button id="${key}" class="btn btn-danger delete-product">Delete</button>
                </td>
        </tr>`;
}

async function getAllProducts() {
    let listCategories = await axios_ins.get('./categories.json');
    let listProducts = await axios_ins.get('./products.json');
    let dataCategory = listCategories.data;
    let dataProduct = listProducts.data;

    let str = '';
    let str_2 = '';

    for (const keyCategory in dataCategory) {
        if (Object.hasOwnProperty.call(dataCategory, keyCategory)) {
            const category = dataCategory[keyCategory];
            str += layoutSelected(category);
        }
    }

    for (const keyProduct in dataProduct) {
        if (Object.hasOwnProperty.call(dataProduct, keyProduct)) {
            const product = dataProduct[keyProduct];
            str_2 += layoutProduct(product, keyProduct);
        }
    }

    document.getElementById('category_id').innerHTML = str;
    document.querySelector('tbody').innerHTML = str_2;
    createProduct();
    deleteProduct();
    btnUpdate();
    updateProduct();
}

function createProduct() {
    document.getElementById('create-product').onclick = async () => {
        let name = document.getElementById('product-name').value;
        let image = document.getElementById('url-image').value;
        let price = document.getElementById('price').value;
        let discount = document.getElementById('discount').value;
        let description = document.getElementById('description').value;
        let category_id = document.getElementById('category_id').value;
        let new_price =  price - (price * (discount / 100));

        const products = {name, image, price, discount, description, category_id, new_price};

        let response = await axios_ins.post('/products.json', products)

        console.log(response);
        if (response.status == 200) {
            const product_id = response.data.name;

            await axios_ins.patch(`/products/${product_id}.json`, {product_id})
            Swal.fire({
                title: 'Thành công!',
                text: 'Thêm danh mục thành công!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1200,
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInDown
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutUp
                    animate__faster
                  `
                }
              });
              document.getElementById('product-name').value = "";
              document.getElementById('url-image').value = "";
              document.getElementById('price').value = "";
              document.getElementById('discount').value = "";
              document.getElementById('description').value = "";
        }

        await getAllProducts();
    }
}

function deleteProduct() {
    const deleteProducts = document.querySelectorAll('.delete-product');
    deleteProducts.forEach(item => {
        item.onclick = async function () {
            const product_id = this.id;
            console.log(product_id);
            Swal.fire({
                title: 'Bạn có chắc chắn?',
                text: 'Bạn sẽ không thể hoàn tác hành động này!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Xóa',
                cancelButtonText: 'Hủy'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axios_ins.delete(`/products/${product_id}.json`);
                    Swal.fire({
                        title: 'Thành công!',
                        text: 'Xóa sản phẩm thành công!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1200,
                        showClass: {
                            popup: `
                                animate__animated
                                animate__fadeInDown
                                animate__faster
                            `
                        },
                        hideClass: {
                            popup: `
                                animate__animated
                                animate__fadeOutUp
                                animate__faster
                            `
                        }
                    });
                    await getAllProducts();
                }
            });

                    
        }
    });
}

async function handleEditClick() {
    let listCategories = await axios_ins.get('./categories.json');
    let dataCategory = listCategories.data;
    let str = '';
    let id = this.id;
    let response = await axios_ins.get(`/products/${id}.json`); 
    let {product_id, name, image, price, discount, description} = response.data;
    document.getElementById('product-name-2').value = name;
    document.getElementById('url-image-2').value = image;
    document.getElementById('price-2').value = price;
    document.getElementById('discount-2').value = discount;
    document.getElementById('description-2').value = description;
    document.getElementById('product-id').value = product_id;

    for (const keyCategory in dataCategory) {
        if (Object.hasOwnProperty.call(dataCategory, keyCategory)) {
            const category = dataCategory[keyCategory];
            str += layoutSelected(category);
        }
    }
    document.getElementById('category_id-2').innerHTML = str;

}

function btnUpdate() {
    let updateProducts = document.querySelectorAll('.update-product');
    updateProducts.forEach(item => {
        item.onclick = handleEditClick;
    });
}

function updateProduct() {
    document.getElementById('update-product').onclick = async function () {
        let product_id = document.getElementById('product-id').value;
        let name = document.getElementById('product-name-2').value;
        let image = document.getElementById('url-image-2').value;
        let price = document.getElementById('price-2').value;
        let discount = document.getElementById('discount-2').value;
        let description = document.getElementById('description-2').value;
        let category_id = document.getElementById('category_id-2').value;
        let new_price =  price - (price * (discount / 100));
        let products = {name, image, price, discount, description, category_id, new_price};

        let response = await axios_ins.patch(`./products/${product_id}.json`, products);
        if (response.status === 200) {
            Swal.fire({
              title: 'Thành công!',
              text: 'Thêm sản phẩm thành công!',
              icon: 'success',
              showConfirmButton: false,
              timer: 1200,
              showClass: {
                popup: `
                  animate__animated
                  animate__fadeInDown
                  animate__faster
                `
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutUp
                  animate__faster
                `
              }
            });
        }
        await getAllProducts(); 
    }
}

export default getAllProducts;