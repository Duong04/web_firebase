import Header from "../../components/layouts/header.js";
import Footer from "../../components/layouts/footer.js";
import About from "../../views/customer/about.html?raw";

const AboutUs = () => {
    return (`
        ${Header()}
        ${About}
        ${Footer()}
    `)
    ;
};

export default AboutUs;