import Header from "../../components/layouts/header.js";
import Footer from "../../components/layouts/footer.js";
import Container from  "../../views/customer/contact.html?raw";

const Contact = () => {
    return (`
        ${Header()}
        ${Container}
        ${Footer()}
    `)
    ;
}

export default Contact;