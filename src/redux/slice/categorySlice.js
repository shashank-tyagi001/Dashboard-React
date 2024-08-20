import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";



export const CategoryData = () => createAsyncThunk('CategoryData' , async () => {
     
})


const CategorySlice = createSlice({
     
    name: "category",

    initialState: {
          isLoading: false,
          data: [],
          isError: false
    },

    extraReducers:  (builder) => {
             
        builder.addCase
    }

})


export default CategorySlice.reducer