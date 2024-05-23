import HomePage from './pages/customer/home';
import Contact from './pages/customer/contact';
import Products from './pages/customer/products';
import AboutUs from './pages/customer/about';
import Blog from './pages/customer/blog';
import Feature from './pages/customer/feature';
import Testimonial from './pages/customer/testimonial';
import ProductDetail from './pages/customer/productDetail';
import CheckoutPage from './pages/customer/checkout';
import Cart from './pages/customer/cart';
import NotFound from './pages/customer/notFound';
import AdminCategories from './pages/admin/adminCategories';
import AdminProducts from './pages/admin/adminProducts';
import Admin from "../src/views/admin/admin.html?raw";
import { render, router } from './utilities';
import getAllCategories from './components/admin/categories';
import getAllProducts from './components/admin/products';
import loadProducts from './components/customer/home';
import loadProducts_2 from './components/customer/products';
import getProductId from './components/customer/productDetail';
import loadCart from './components/customer/cart';
import loadOrder from './components/customer/checkout';
import ThankPage from './pages/customer/thank';

const app = document.querySelector('#app');


router.on('/', async () => {
    render(HomePage(), app);
    await loadProducts();
})
    .on('/about', () => render(AboutUs(), app))
    .on('/products', async () => {
        render(Products(), app);
        await loadProducts_2();
    }).on('/contact', () => render(Contact(), app))
    .on('/blog', () => render(Blog(), app))
    .on('/feature', () => render(Feature(), app))
    .on('/testimonial', () => render(Testimonial(), app))
    .on('/productdetail/:id', (params) => {
        render(ProductDetail(), app);
        getProductId(params.data.id);
    })
    .on('/cart', () => {
        render(Cart(), app);
        loadCart();
    })
    .on('/checkout', () => {
        render(CheckoutPage(), app);
        loadOrder();
    })
    .on('/thanks', () => render(ThankPage(), app))
    .on('/adminCategories', async () => {
        render(Admin, app);
        document.getElementById('article').innerHTML = AdminCategories();
        await getAllCategories();
    }).on('/adminProducts', async () => {
        render(Admin, app);
        document.getElementById('article').innerHTML = AdminProducts();
        await getAllProducts();
    });

router.notFound(() => render(NotFound(), app));
router.resolve();

