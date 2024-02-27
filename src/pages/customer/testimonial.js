import Header from "../../components/layouts/header";
import Footer from "../../components/layouts/footer";
import Container from  "../..//views/customer/testimonial.html";

const Testimonial = () => {
    return (`
        ${Header()}
        ${Container}
        ${Footer()}
    `)
    ;
}

export default Testimonial;