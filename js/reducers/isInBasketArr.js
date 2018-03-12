const isInBasketArr=(state=[],action)=>{
    switch(action.type){
        case "INIT_IS_IN_BASKET_ARR":
            const stateSet=action.productsList.map(product=>{
                return {id:product.id,isSelected:false}
            })

            return stateSet

        case "SET_IS_IN_BASKET_ARR":
            const stateSet=state.map(isInBasket=>{
                if(product.id===isInBasket.id){
                    isInBasket.isSelected=action.isSelected
                }
                return isInBasket
            })

            return stateSet

        default:
            return state
    }
}