import React, { Component } from 'react';


class Product extends Component {
	constructor() {
		super()

		this.handleProductClick = this.handleProductClick.bind(this)
	}

	handleProductClick() {
		this.props.onProductClick(this.props.product)
	}

	render() {
		const { product, isSelected } = this.props

		return (
			<div className="product">
				{isSelected && <div>Selected</div>}
				<img src={product.imgSrc} alt="product_image" />
				<h1>{product.productName}</h1>
				<p>{product.productDescription}</p>
				<img src="./assets/coins.png" alt="" />
				<p>{product.price} Gill</p>
				<button
					onClick={this.handleProductClick}
				>Add to Basket</button>
				<div>-------------</div>
			</div>
		)
	}
}

export default Product
