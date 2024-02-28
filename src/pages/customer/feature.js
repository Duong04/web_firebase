import Header from "../../components/layouts/header.js";
import Footer from "../../components/layouts/footer.js";
import Container from  "../..//views/customer/feature.html?raw";

const Feature = () => {
    return (`
        ${Header()}
        ${Container}
        ${Footer()}
    `)
    ;
}

export default Feature;