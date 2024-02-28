import Header from "../../components/layouts/header.js";
import Footer from "../../components/layouts/footer.js";
import Container from  "../..//views/customer/testimonial.html?raw";

const Testimonial = () => {
    return (`
        ${Header()}
        ${Container}
        ${Footer()}
    `)
    ;
}

export default Testimonial;