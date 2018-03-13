const productsInBasket=(state=0,action)=>{
    switch(action.type){
        case "ADD":            
            return state+action.price;

        case "SUBTRACT":
            return state-action.price;  
             
        default:
            return state
    }
}

export default productsInBasket