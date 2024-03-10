import Header from "../../components/layouts/header.js";
import Footer from "../../components/layouts/footer.js";
import Container from  "../..//views/customer/cart.html?raw";

const Cart = () => {
    return (`
        ${Header()}
        ${Container}
        ${Footer()}
    `)
    ;
}

export default Cart;