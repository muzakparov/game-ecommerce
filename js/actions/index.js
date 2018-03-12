export const addProductToBasket = (product) => {
    return {
        type: "ADD_PRODUCT_TO_BASKET",
        product,
    }
}

export const removeProductToBasket = (product) => {
    return {
        type: "REMOVE_PRODUCT_FROM_BASKET",
        product,
    }
}

export const initIsInBasketArr=(productsList)=>{
    return {
        type:"INIT_IS_IN_BASKET_ARR",
        productsList,
    }
}

export const setIsInBasketArr = (product, isSelected) => {
    return {
        type: "SET_IS_IN_BASKET_ARR",
        product,
        isSelected,
    }
}