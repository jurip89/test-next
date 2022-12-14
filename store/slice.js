import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            console.log('before',current(state))
            const newState = state.push(action.payload)
            state = newState
             console.log('after',state)
        }
    }
})
export default cartSlice.reducer
export const {addItem} = cartSlice.actions