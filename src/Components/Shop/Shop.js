import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    let [products, setProducts] = useState(first10);
    let [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log('Product added', product);
        let newCart = [...cart, product];
        setCart(newCart);
    }
    return (
		<div className="shop-container">
			<div className="product-container">
				
                {
                    products.map(product => <Product
                        product={product}
                        handleAddProduct={handleAddProduct}
                    >

                    </Product>)
                }
				
            </div>
            <div className="cart-container">
                <h1>
                    This is cart container
                </h1>
                <h5>Order Summary : { cart.length}</h5>
            </div>
		</div>
	);
};

export default Shop;