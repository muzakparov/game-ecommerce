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
			<div>
				<Link to="/">Back</Link>
				<div>Checkout</div>
				<div>
					{productsInBasketList}
				</div>
			</div>
		)
	}
}

export default Checkout
