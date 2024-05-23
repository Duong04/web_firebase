import Header from "../../components/layouts/header.js";
import Footer from "../../components/layouts/footer.js";
import Checkout from "../../views/customer/checkout.html?raw";

const CheckoutPage = () => {
    return (`
        ${Header()}
        ${Checkout}
        ${Footer()}
    `);
}

export default CheckoutPage;