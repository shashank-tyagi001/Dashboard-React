import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";



export const studentPost = createAsyncThunk('studentPost' , async (data , {rejectWithValue}) => {

    const postData = await fetch("http://localhost:4000/students/" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    try{
        const result = await postData.json();
        return result;
    }catch (error){
        return  rejectWithValue(error.response);
    }   
})


const signUpSlice = createSlice({

    name: "signUp",

    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },

    extraReducers: (builder) => {
         
        builder.addCase( studentPost.pending , (state,action) => {
              state.isLoading = true
        })
        builder.addCase( studentPost.fulfilled , (state,action) => {
            state.isLoading = false,
            state.data.push(action.payload)
       })
        builder.addCase( studentPost.rejected , (state,action) => {
             state.isError = true
        })
    }
})



export default signUpSlice.reducer

