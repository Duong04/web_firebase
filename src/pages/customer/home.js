import Header from "../../components/layouts/header.js";
import Footer from "../../components/layouts/footer.js";
import Home from "../../views/customer/home.html?raw";

const HomePage = () => {
    return (`
        ${Header()}
        ${Home}
        ${Footer()}
    `)
    ;
};


export default HomePage;