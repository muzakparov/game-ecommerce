import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Router, Route, hashHistory } from 'react-router'

import StoreStep from './StoreStep'
import Checkout from './Checkout'


class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			productsArr: this.props.productsArr,
			productsInBasket: [],
			isInBasketArr: [],
		}

		this.handleProductClick = this.handleProductClick.bind(this)
		this.handleProductDelete = this.handleProductDelete.bind(this)
	}

	componentDidMount() {
		const { productsArr } = this.state

		const isInBasketArr = new Array(productsArr.length);

		productsArr.forEach((product, i) => {
			isInBasketArr[i] = { id: product.id, isSelected: false }
		})

		console.log("isInBasketArr", isInBasketArr)

		this.setState({
			isInBasketArr,
		})
	}

	handleProductClick(product) {
		console.log("add to basket")

		const isInBasket = this.state.isInBasketArr.filter(isInBasket => product.id === isInBasket.id)[0]

		//if product was added to basket before, don't add again
		if (isInBasket.isSelected) {
			return
		}

		const productsInBasket = this.state.productsInBasket.slice()
		let isInBasketArr = this.state.isInBasketArr.slice()

		isInBasketArr = isInBasketArr.map(isInBasket => {
			if (product.id === isInBasket.id) {
				return { id: isInBasket.id, isSelected: true }
			}
			return isInBasket
		})

		productsInBasket.push(product)

		this.setState({
			productsInBasket,
			isInBasketArr,
		})
	}

	handleProductDelete(product) {
		let productsInBasket = this.state.productsInBasket.slice()
		let isInBasketArr = this.state.isInBasketArr.slice()

		productsInBasket = productsInBasket.filter(productInBasket => productInBasket.id !== product.id)

		isInBasketArr = isInBasketArr.map(productInBasket => {
			if (product.id === productInBasket.id) {
				productInBasket.isSelected = false
			}
			return productInBasket
		})

		this.setState({
			productsInBasket,
		})
	}

	render() {
		const { productsInBasket, productsArr } = this.state

		return (
			<Router history={hashHistory}>
				<Route exact path="/" component={() => (
					<StoreStep
						{...this.state}
						onProductClick={this.handleProductClick}
						onProductDelete={this.handleProductDelete}
						productsArr={productsArr}
					/>)
				}
				/>
				<Route path="/checkout" component={() => (
					<Checkout
						productsInBasket={this.state.productsInBasket}
						onProductDelete={this.handleProductDelete}
					/>)
				}
				/>
			</Router>
		)
	}
}

//runtime type checking
App.propTypes = {
	productsArr: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		imgSrc: PropTypes.string.isRequired,
		productName: PropTypes.string.isRequired,
		productDescription: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
	})).isRequired,
}


export default App
