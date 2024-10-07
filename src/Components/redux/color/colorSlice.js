import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
    name:"color",
    initialState:{
        value:"blue"
    },
    reducers:{
        color_change:(state,action)=>{
            state.value = action.payload.color
        }
    }
})

export const {color_change} = colorSlice.actions

export default colorSlice.reducer