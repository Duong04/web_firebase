import Header from "../../components/layouts/header";
import Footer from "../../components/layouts/footer";
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