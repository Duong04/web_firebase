import HomePage from './pages/customer/home';
import Contact from './pages/customer/contact';
import Products from './pages/customer/products';
import AboutUs from './pages/customer/about';
import Blog from './pages/customer/blog';
import Feature from './pages/customer/feature';
import Testimonial from './pages/customer/testimonial';
import ProductDetail from './pages/customer/productDetail';
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

const app = document.querySelector('#app');


router.on('/', async () => {
    render(HomePage(), app);
    await loadProducts();
});

router.on('/about', () => render(AboutUs(), app));

router.on('/products', async () => {
    render(Products(), app);
    await loadProducts_2();
});

router.on('/contact', () => render(Contact(), app));

router.on('/blog', () => render(Blog(), app));

router.on('/feature', () => render(Feature(), app));

router.on('/testimonial', () => render(Testimonial(), app));

router.on('/productdetail', () => {
    render(ProductDetail(), app);
    getProductId();
});

router.on('/cart', () => {
    render(Cart(), app);
    loadCart();
});

router.on('/adminCategories', async () => {
    render(Admin, app);
    document.getElementById('article').innerHTML = AdminCategories();
    await getAllCategories();
});

router.on('/adminProducts', async () => {
    render(Admin, app);
    document.getElementById('article').innerHTML = AdminProducts();
    await getAllProducts();
});

router.notFound(() => render(NotFound(), app));
router.resolve();

