import Header from "../../components/layouts/header.js";
import Footer from "../../components/layouts/footer.js";
import Container from "../../views/customer/product.html?raw";
const Products = () => {
    return (`
        ${Header()}
        ${Container}
        ${Footer()}
    `)
    ;
};


export default Products;