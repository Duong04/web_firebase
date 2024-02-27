import Header from "../../components/layouts/header";
import Footer from "../../components/layouts/footer";
import Container from  "../..//views/customer/feature.html";

const Feature = () => {
    return (`
        ${Header()}
        ${Container}
        ${Footer()}
    `)
    ;
}

export default Feature;