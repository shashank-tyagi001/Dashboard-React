import { configureStore } from "@reduxjs/toolkit";
import  loginSlice  from "./slice/loginSlice";
import signUpSlice from "./slice/signUpSlice";


export const store = configureStore({
      reducer: {
         login:  loginSlice, 
         signUp: signUpSlice,
    }
})