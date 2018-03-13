import React, { Component } from 'react';


class ProductInBasket extends Component {
	handleProductDelete() {
		this.props.onProductDelete(this.props.product)
	}
	render() {
		const { product } = this.props

		return (
			<div className="product-in-basket">
				<img src={product.imgSrc} alt="product_thumbnail_img" className="product-thumbnail-img" />
				<div className="product-info up">
					<div className="product-name">{product.productName}</div>
					<div className="product-price"><img src="./assets/coins.png" alt="coins"/> {product.price} Gil</div>
				</div>
				<a onClick={this.handleProductDelete.bind(this)} className="btn-delete up">
					<img src="./assets/bin.png" alt="delete"/>
				</a>				
			</div>
		)
	}
}

export default ProductInBasket
