import React, { Component } from 'react';
import { Link } from 'react-router'


import Product from './Product'
import ProductInBasket from './ProductInBasket'


class StoreStep extends Component {

	handleProductClick(product) {
		this.props.onProductClick(product);
	}


	render() {
		const {
			productsInBasket,
			isInBasketArr,
			productsArr,
			onProductDelete,
		} = this.props

		const productsList = productsArr.map(product => {
			const isSelected = isInBasketArr.length ?
				isInBasketArr.filter(isInBasket => isInBasket.id === product.id)[0].isSelected
				: false

			console.log("StoreStep productsInBasket", productsInBasket)

			return (
				<Product
					product={product}
					key={product.id}
					onProductClick={this.handleProductClick.bind(this)}
					isSelected={isSelected}
				/>
			)

		})

		const productsInBasketList = productsInBasket.map(productInBasket => {
			return (
				<ProductInBasket
					key={productInBasket.id}
					product={productInBasket}
					onProductDelete={onProductDelete}
				/>
			)
		})

		console.log("productsInBasketList", productsInBasketList)

		return (
			<React.Fragment>
				<div className="basket-section">
					<h1>Basket</h1>
					{
						!productsInBasket.length && <p>No items</p>
					}
					<div>{productsInBasketList}</div>
					<div>Total</div>
					<div className="btn-continue-wrap">
						{
							!productsInBasket.length && <div className="disable-overlay"></div>
						}
						<button className="btn-continue">
							{productsInBasket.length
								? <Link to="/checkout" style={{textDecoration:"none", color:"white"}}>Continue</Link>
								: "Continue"
							}
						</button>
					</div>
				</div>

				<div className="products-list-section">
					<div className="products-list-wrap">
						{productsList}
					</div>
					
				</div>

			</React.Fragment>

		)
	}
}

export default StoreStep
