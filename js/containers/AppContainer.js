import { connect } from 'react-redux'

import {
    addProductToBasket,
    removeProductToBasket,
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
        onRemoveProductToBasket:(product)=>{
            dispatch(removeProductToBasket(product))
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
