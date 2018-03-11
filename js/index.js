import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router'


const app = document.getElementById('app');

const productsArr = [
	{
		id: 1,
		imgSrc: "./assets/game1.jpg",
		productName: "productName",
		productDescription: "productDescription",
		price: 100
	},
	{
		id: 2,
		imgSrc: "",
		productName: "",
		productDescription: "",
		price: 100
	},
	{
		id: 3,
		imgSrc: "",
		productName: "",
		productDescription: "",
		price: 100
	},
	{
		id: 4,
		imgSrc: "",
		productName: "",
		productDescription: "",
		price: 100
	},
]

class App extends Component {
	constructor() {
		super()

		this.state = {
			productsInBasket: [],
			isInBasketArr: [],
		}

		this.handleProductClick = this.handleProductClick.bind(this)
		this.handleProductDelete=this.handleProductDelete.bind(this)
	}

	componentDidMount() {
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

	handleProductDelete(product){
		let productsInBasket= this.state.productsInBasket.slice()
		let isInBasketArr=this.state.isInBasketArr.slice()

		productsInBasket=productsInBasket.filter(productInBasket=>productInBasket.id!==product.id)

		isInBasketArr=isInBasketArr.map(productInBasket=>{
			if(product.id===productInBasket.id){
				productInBasket.isSelected=false
			}
			return productInBasket
		})

		this.setState({
			productsInBasket,
		})
	}

	render() {
		const { productsInBasket }=this.state
		return (
			<Router history={hashHistory}>
				<Route exact path="/" component={()=>(
						<StoreStep 
							{...this.state} 
							onProductClick={this.handleProductClick}
							onProductDelete={this.handleProductDelete}
						/>)
					} 
				/>
				<Route path="/checkout" component={()=>(
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

class StoreStep extends Component {

	handleProductClick(product){
		this.props.onProductClick(product);
	}
	

	render() {
		const { productsInBasket, isInBasketArr,onProductDelete } = this.props

		const productsList = productsArr.map(product => {
			const { isSelected } = isInBasketArr.length ?
				isInBasketArr.filter(isInBasket => isInBasket.id === product.id)[0]
				: false

			console.log("isInBasketArr isSelected", isSelected)

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
			<div>
				{productsList}
				<div className="basket">
					<h1>Basket</h1>
					{
						!productsInBasket.length && <p>No Items</p>
					}
					<div>{productsInBasketList}</div>
					<button>{productsInBasket.length?<Link to="/checkout">Continue</Link>:"Continue"}</button>
				</div>
			</div>

		)
	}
}

class Checkout extends Component {
	render() {
		const { productsInBasket, onProductDelete }=this.props

		console.log("Checkout productsInBasket",productsInBasket)

		const productsInBasketList=productsInBasket.map(productInBasket=>{
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
				<p>{product.price}</p>
				<button
					onClick={this.handleProductClick}
				>Add to Basket</button>
				<div>-------------</div>
			</div>
		)
	}
}

class ProductInBasket extends Component {
	handleProductDelete(){
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

ReactDOM.render((
	<App />
), app);
