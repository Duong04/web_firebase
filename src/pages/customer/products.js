import Header from "../../components/layouts/header";
import Footer from "../../components/layouts/footer";
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