import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers: {
        increaseCount : (state)=>{
            state.value += 1
        },
        decreaseCount : (state)=>{
            state.value -=1
        }
    }
})

export const {increaseCount,decreaseCount} = counterSlice.actions

export default counterSlice.reducer