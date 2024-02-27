import Header from "../../components/layouts/header";
import Footer from "../../components/layouts/footer";
import Container from  "../..//views/customer/blog.html";

const Blog = () => {
    return (`
        ${Header()}
        ${Container}
        ${Footer()}
    `)
    ;
}

export default Blog;