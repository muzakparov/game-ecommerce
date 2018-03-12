import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import StoreStep from './StoreStep'
import Checkout from './Checkout'

import store from '../store'

// const history = syncHistoryWithStore(browserHistory, store)

class App extends Component {
	constructor(props) {
        super(props)
        console.log("APP constructor",this.props)
		this.handleProductClick = this.handleProductClick.bind(this)
		this.handleProductDelete = this.handleProductDelete.bind(this)
	}

	componentDidMount() {
		this.props.onInitIsInBasketArr(this.props.productsArr)
	}

	handleProductClick(product) {
		console.log("add to basket")

		const isInBasket = this.props.isInBasketArr.filter(isInBasket => product.id === isInBasket.id)[0]

		//if product was added to basket before, don't add again
		if (isInBasket.isSelected) {
			return
		}

        this.props.onAddProductToBasket(product)
        this.props.onSetIsInBasketArr(product, true)
        
	}

	handleProductDelete(product) {
		//console.log("handleProductDelete",product,this.props.onRemoveProductFromBasket)
		this.props.onRemoveProductFromBasket(product)
		this.props.onSetIsInBasketArr(product,false)
	}

	render() {
		const {             
            productsArr,
        } = this.props

		return (
			<Router history={hashHistory}>
				<Route exact path="/" component={() => (
					<StoreStep
						onProductClick={this.handleProductClick}
						onProductDelete={this.handleProductDelete}
						productsArr={productsArr}
                        productsInBasket={this.props.productsInBasket}
                        isInBasketArr={this.props.isInBasketArr}
					/>)
				}
				/>
				<Route path="/checkout" component={() => (
					<Checkout
						productsInBasket={this.props.productsInBasket}
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
