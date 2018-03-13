import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux'

import productsInBasket from './productsInBasket'
import isInBasketArr from './isInBasketArr'
import total from './total'



const reducers = combineReducers({
    productsInBasket,
    isInBasketArr,
    total,
    routing: routerReducer,
})


export default reducers;