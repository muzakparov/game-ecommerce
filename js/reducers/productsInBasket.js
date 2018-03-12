const productsInBasket=(state=[],action)=>{
    switch(action.type){
        case "ADD_PRODUCT_TO_BASKET":
            state.push(action.product)
            return state;

        case "REMOVE_PRODUCT_FROM_BASKET":
            console.log("REMOVE_PRODUCT_FROM_BASKET",state.filter(statum=>statum.id!==action.product.id) )
            return state.filter(statum=>statum.id!==action.product.id)      
             
        default:
            return state
    }
}

export default productsInBasket