import React, { Component } from 'react';


class ProductInBasket extends Component {
	handleProductDelete() {
		this.props.onProductDelete(this.props.product)
	}
	render() {
		const { product } = this.props

		return (
			<div className="product-in-basket">
				<img src={product.imgSrc} alt="" />
				<div>{product.productName}</div>
				<div>{product.price}</div>
				<button onClick={this.handleProductDelete.bind(this)}>Delete</button>
				<div>-------------</div>
			</div>
		)
	}
}

export default ProductInBasket
