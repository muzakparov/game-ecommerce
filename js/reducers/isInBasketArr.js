const isInBasketArr=(state=[],action)=>{
    switch(action.type){
        case "INIT_IS_IN_BASKET_ARR":
            return action.productsList.map(product=>{
                return {id:product.id,isSelected:false}
            })            

        case "SET_IS_IN_BASKET_ARR":
            return state.map(isInBasket=>{
                if(action.product.id===isInBasket.id){
                    isInBasket.isSelected=action.isSelected
                }
                return isInBasket
            })        

        default:
            return state
    }
}

export default isInBasketArr