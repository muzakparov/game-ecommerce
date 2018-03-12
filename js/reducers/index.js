import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux'

import productsInBasket from './productsInBasket'
import isInBasketArr from './isInBasketArr'


const reducers = combineReducers({
    productsInBasket,
    isInBasketArr,
    routing: routerReducer,
})


export default reducers;