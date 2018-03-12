import { combineReducers } from "redux";

import productsInBasket from './productsInBasket'
import isInBasketArr from './isInBasketArr'


const reducers = combineReducers({
    productsInBasket,
    isInBasketArr,
})


export default reducers;