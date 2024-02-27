import axios from "axios";
import Swal from 'sweetalert2';
import 'animate.css';

const axios_ins = axios.create({
    baseURL: "https://my-project-29fd5-default-rtdb.firebaseio.com",
});

function buildTR({category_id, category_name}, key) {
    return `
    <tr>
        <th scope="row">${category_id}</th>
        <td>${category_name}</td>
        <td>
          <button id="${key}" class="btn btn-warning update-categories" data-bs-toggle="modal" data-bs-target="#update">Edit</button>
          <button id="${key}" class="btn btn-danger delete-categories">Delete</button>
        </td>
    </tr>
    `;
}

async function handleEditClick() {
  let id = this.id;
  let respone = await axios_ins.get(`/categories/${id}.json`);
  let { category_id, category_name } = respone.data;

  document.getElementById("category_id-2").value = category_id;
  document.getElementById("categories-2").value = category_name;
}

function handlebtnEdit() {
  let arr = document.querySelectorAll(".update-categories");
  arr.forEach(item => {
    item.onclick = handleEditClick;
  });
}

function updateCategories() {
  document.getElementById('update-category').onclick = async function () {
    let category_id = document.getElementById("category_id-2").value;
    let category_name = document.getElementById("categories-2").value;
    let categories = { category_name };
  
    let response = await axios_ins.patch(`/categories/${category_id}.json`, categories);
    if (response.status === 200) {
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
    } 
    await getAllCategories();
  }
}

async function deleteCategory() {
  const deleteCategories = document.querySelectorAll('.delete-categories');
  deleteCategories.forEach( item => {
    item.onclick = async function() {
      const category_id = this.id;
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
            await axios_ins.delete(`/categories/${category_id}.json`);
            Swal.fire({
                title: 'Thành công!',
                text: 'Xóa danh mục thành công!',
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
            await getAllCategories();
        }
    });
    }
  })
}

async function getAllCategories() {
    let respone = await axios_ins.get("/categories.json");
    let data = respone.data;
    let trstring = "";
  
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const element = data[key];
  
        trstring += buildTR(element, key);
      }
    }
    document.querySelector("tbody").innerHTML = trstring;
    createCategories();
    deleteCategory();
    handlebtnEdit();
    updateCategories();
}

function createCategories() {
    document.querySelector("#create-category").addEventListener('click', async function () {
        let category_name = document.getElementById("categories").value;
        let categories = { category_name };
      
        let response = await axios_ins.post(`/categories.json`, categories);
        if(response.status === 200) {
          const category_id = response.data.name;
          await axios_ins.patch(`/categories/${category_id}.json`, { category_id});
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
          document.getElementById("categories").value = "";
        }

        await getAllCategories();

    });
}



export default getAllCategories;