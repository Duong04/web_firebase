import Header from "../../components/layouts/header";
import Footer from "../../components/layouts/footer";
import Container from  "../..//views/customer/contact.html";

const Contact = () => {
    return (`
        ${Header()}
        ${Container}
        ${Footer()}
    `)
    ;
}

export default Contact;