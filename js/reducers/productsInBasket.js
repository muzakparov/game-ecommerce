const productsInBasket=(state=[],action)=>{
    switch(action.type){
        case "ADD_PRODUCT_TO_BASKET":
            state.push(action.product)
            return state;

        case "REMOVE_PRODUCT_FROM_BASKET":
            return state.filter(product=>product.id!==action.product.id)      
             
        default:
            return state
    }
}