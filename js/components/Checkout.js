import React, { Component } from 'react';
import { Link } from 'react-router'

import ProductInBasket from './ProductInBasket'


class Checkout extends Component {
	render() {
		const { productsInBasket, onProductDelete } = this.props

		console.log("Checkout productsInBasket", productsInBasket)

		const productsInBasketList = productsInBasket.map(productInBasket => {
			return (
				<ProductInBasket
					product={productInBasket}
					key={productInBasket.id}
					onProductDelete={onProductDelete}
				/>
			)
		})

		return (
			<div className="checkout">
				<Link to="/" className="add-to-basket" style={{textDecoration:"none", color:"white"}}>
					Back
				</Link>
				<div className="products-list">
					{productsInBasketList}
				</div>
				<div>Total: {this.props.total}</div>
			</div>
		)
	}
}

export default Checkout
