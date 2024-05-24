import { createSlice } from '@reduxjs/toolkit'

const blogSlice = createSlice({
    name:"blog",
    initialState:{
        post: null
    },
    reducers:{
        dataFetch: (state, action)=>{
            state.post = action.payload.post;
        },
        dataRelease: (state)=>{
            state.post = null;
        }
    }
})

export default blogSlice.reducer;
export const {dataFetch, dataRelease} = blogSlice.actions;