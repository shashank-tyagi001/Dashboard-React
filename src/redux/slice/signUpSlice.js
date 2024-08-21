import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


export const studentPost = createAsyncThunk('studentPost' , async () => {
    const data = await axios.post("http://localhost:4000/students/" , newObject)
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
            state.data = action.payload
       })
        builder.addCase( studentPost.pending , (state,action) => {
             state.isError = true
        })

    }
})



export default signUpSlice.reducer

