import { router } from "../../utilities";

const layout = ({name, quantity, total}) => {
    return (`<li><a href="#">${name} <span class="middle">x ${quantity}</span> <span class="last">$${total}.00</span></a></li>`);
}

const loadOrder = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length > 0) {
        let delivery = 0; 
        let totalPrice = 0; 
        let subtotal = 0;
        let discount = 0;
        let htmls = cart.map((item) => {
            let total = item.price * item.quantity;
            discount += item.quantity;
            subtotal += total;
            return layout(item);
        }).join('');
        delivery = subtotal > 100 ? 0 : 10;
        totalPrice = subtotal + delivery;
        document.getElementById('listOrder').innerHTML = htmls;
        document.getElementById('subtotal').innerText = '$' + Math.floor(subtotal) + '.00';
        document.getElementById('delivery').innerText = delivery > 0 ? '$' + delivery + '.00' : 'Free Shipping';
        document.getElementById('total').innerText = '$' + Math.floor(totalPrice) + '.00';
    }else {
        router.navigate('/cart');
    }
    checkOut();
}

const checkOut = () => {
    document.getElementById('checkout').addEventListener('submit', (event) => {
        event.preventDefault();
        localStorage.removeItem('cart');
        router.navigate('/thanks');
    })
}

export default loadOrder;