import Header from "../../components/layouts/header";
import Footer from "../../components/layouts/footer";
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