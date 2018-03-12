import React from 'react'

import { connect } from 'react-redux'

import {
    addProductToBasket,
    removeProductFromBasket,
    initIsInBasketArr,
    setIsInBasketArr,
} from '../actions'

import App from '../components/App'

const mapStateToProps = (state, ownProps) => {
    return {
        productsArr: ownProps.productsArr,
        productsInBasket: state.productsInBasket,
        isInBasketArr: state.isInBasketArr,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddProductToBasket:(product)=>{
            dispatch(addProductToBasket(product))
        },
        onRemoveProductFromBasket:(product)=>{
            dispatch(removeProductFromBasket(product))
        },
        onSetIsInBasketArr:(product, isSelected)=>{
            dispatch(setIsInBasketArr(product, isSelected))
        },
        onInitIsInBasketArr:(productsList)=>{
            dispatch(initIsInBasketArr(productsList))
        },
    }
}

const AppContainer = connect(
    mapStateToProps, mapDispatchToProps
)(App)

export default AppContainer
