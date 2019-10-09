import React, { Component } from 'react';


class Product extends Component {


	handleProductClick=()=> {
		this.props.onProductClick(this.props.product)
	}

	render() {
		const { product, isSelected } = this.props

		return (
			<div className="product">
				{isSelected && <div className="disable-overlay"></div>}
				<img src={product.imgSrc} alt="product_image" className="product-image"/>
				<div className="product-details">
					<h2>{product.productName}</h2>
					<p>{product.productDescription}</p>
					<img src="./assets/coins.png" alt="coin" className="coin" />
					<span className="price">{product.price} Gil</span>
					<div>
						<button
							onClick={this.handleProductClick}
							className="add-to-basket"
						>Add to Basket</button>
						<img src="./assets/controller.png" alt="controller" className="controller" />
					</div>					
				</div>				
			</div>
		)
	}
}

export default Product
