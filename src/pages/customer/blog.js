import Header from "../../components/layouts/header.js";
import Footer from "../../components/layouts/footer.js";
import Container from  "../..//views/customer/blog.html?raw";

const Blog = () => {
    return (`
        ${Header()}
        ${Container}
        ${Footer()}
    `)
    ;
}

export default Blog;