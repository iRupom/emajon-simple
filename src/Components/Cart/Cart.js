import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let total = cart.reduce((total, item) => total + item.price, 0);
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    } 
    return (
		<div>
			<h3>Order Summary</h3>
			<p>Items Ordered : {cart.length}</p>
			<p>Product Price : {total}</p>
			<p>Total Shipping Cost : {shipping}</p>
			<p>Total Price : {total + shipping}</p>
			<button className="cart-button">
				<FontAwesomeIcon icon={faCartShopping} /> Proceed To Order
			</button>
		</div>
	);
};

export default Cart;