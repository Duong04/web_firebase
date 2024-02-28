import Header from "../../components/layouts/header.js";
import Footer from "../../components/layouts/footer.js";
import Content from "../../views/customer/product-single.html?raw";

const ProductDetail = () => {
    return (`
        ${Header()}
        ${Content}
        ${Footer()}
    `)
    ;
};

export default ProductDetail;