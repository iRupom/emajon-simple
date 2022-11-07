import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock } = props.product;
    const handleAddProduct = props.handleAddProduct;
    // console.log("rupom",handleAddProduct);
    return (
		<div className="product">
			<div className="image">
				<img src={img} alt="" />
			</div>
			<div className="product-info">
				<h4 className="product-name">{name}</h4>
				<p>
					<small>By : {seller}</small>
				</p>
				<p>Price: ${price}</p>
				<p>
					<small>Only {stock} left in stock - Order Soon </small>
				</p>
                <button
                    className="cart-button"

                    // We declare handleAddProduct inside a arrow function
                    // so that it can not called immediately
                    onClick={()=> handleAddProduct(props.product)}
                >
					<FontAwesomeIcon icon={faCartShopping} /> add to cart
				</button>
			</div>
		</div>
	);
};

export default Product;