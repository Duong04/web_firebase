import Header from "../../components/layouts/header";
import Footer from "../../components/layouts/footer";
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