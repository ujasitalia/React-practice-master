const reducer = (state, action) => {
    if(action.type==='CLEAR_CART'){
        return {...state, cart:[]};
    };
    if(action.type==='REMOVE'){
        const id = action.payload;
        const newCart = state.cart.filter((item) => item.id !== id);
        return {...state, cart:newCart};
    };
    if(action.type==='INCREASE'){
        let tempCart = state.cart.map((item) => {
            if(item.id===action.payload){
                return {...item, amount: item.amount + 1}
            }
            return item;
        });
        return {...state, cart: tempCart};
    };
    if(action.type==='DECREASE'){
        let tempCart = state.cart.map((item) => {
            if(item.id===action.payload){
                return {...item, amount: item.amount - 1}
            }
            return item;
        }).filter((item) => item.amount !== 0);
        return {...state, cart: tempCart};
    };
    if(action.type==='GET_TOTALS'){
        let {total, amount} = state.cart.reduce(
            (cartTotal, cartItem) => 
            {
                const {price, amount} = cartItem;
                const itemTotal = price * amount;

                cartTotal.amount += amount;
                cartTotal.total += itemTotal;

                return cartTotal;
            },
            {
                total:0, 
                amount:0,
            }
            );
        total = parseFloat(total.toFixed(2))
        return{...state, total, amount}
    };
    if(action.type==='LOADING'){
        return{...state, loading:true};
    }
    if(action.type==='DISPLAY'){
        return{...state, cart:action.payload, loading:false};
    }
    return state;
};
export default reducer;