import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


export const LoginData = createAsyncThunk('LoginData' , async () => {
    const data = await fetch("http://localhost:4000/students/");
    const result = await data.json();
    return result;
})


const loginSlice = createSlice({

    name: "login",

    initialState: {
          isLoading: false,
          data: [],
          isError: false
    },

    extraReducers: (builder) => {
             
        builder.addCase( LoginData.pending , (state,action) => {
            state.isLoading = true;
        })
        .addCase( LoginData.fulfilled , (state,action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
         builder.addCase( LoginData.rejected , (state,action) => {
            state.isError = true;
         })
    }

})


export default loginSlice.reducer