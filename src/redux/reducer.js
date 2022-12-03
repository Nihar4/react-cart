import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer({
    cartItems: [],
    shipping: 0,
    subtotal: 0,
    total: 0,
    tax: 0,
},
    {
        addToCart: (state, action) => {
            const item = action.payload;
            const isItemExist = state.cartItems.find((i) => i.id === item.id);
            if (isItemExist) {
                state.cartItems.forEach(i => {
                    if (i.id === item.id) {
                        i.qty += 1;
                    }
                })
            }
            else {
                state.cartItems.push(item);
            }
        },

        decrement: (state, action) => {
            const item = action.payload;
            state.cartItems.forEach(i => {
                if (i.id === item) {
                    if (i.qty > 1)
                        i.qty -= 1;
                }
            })
        },

        delete_handler: (state, action) => {
            const item = action.payload;
            state.cartItems = state.cartItems.filter((i) => i.id !== item);
        },

        calculate: (state) => {
            let sum = 0;
            state.cartItems.forEach((i) => {
                sum = sum + (i.qty * i.price);
            })
            state.shipping = sum > 1000 ? 0 : 50;
            if (sum == 0) {
                state.shipping = 0;
            }
            state.subtotal = sum;
            state.tax = Number((sum * 0.18).toFixed());
            state.total = state.shipping + state.subtotal + state.tax;
        },

    });
