import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : JSON.parse(localStorage.getItem("cart")) || [],
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{

        Add_Product : (state , action)=> {
            const index = state.cart.findIndex(p => p.id === action.payload.id);
            if(index !== -1){
                // alert("هذا المنتج موجود بالفعل");
                return
            }   
            state.cart.push(action.payload)
            localStorage.setItem("cart" , JSON.stringify(state.cart))
        },

        Remove_Product : (state , action)=> {
            state.cart = state.cart.filter(p => p.id !== action.payload.id)
            localStorage.setItem("cart" , JSON.stringify(state.cart))
        },

        Increment_Quantity : (state , action)=> {
           const index = state.cart.findIndex(p => p.id === action.payload.id);
           if(index !== -1){
            if(state.cart[index].quntity === state.cart[index].stock){
                return
            }      
            state.cart[index].quntity++; 
            localStorage.setItem("cart" , JSON.stringify(state.cart))
           }

        },

        Decrement_Quantity : (state , action)=> {
           const index = state.cart.findIndex(p => p.id === action.payload.id);
           if(index !== -1){
                if(state.cart[index].quntity === 1){
                    return
                }
                state.cart[index].quntity--; 
                localStorage.setItem("cart" , JSON.stringify(state.cart))
           }
        },
        Reset_Cart : (state)=> {
            state.cart = [];
            localStorage.setItem("cart" , JSON.stringify(state.cart))
        },
    }
})

export const {Add_Product , Remove_Product , Increment_Quantity , Decrement_Quantity , Reset_Cart} = cartSlice.actions;

export default cartSlice.reducer;