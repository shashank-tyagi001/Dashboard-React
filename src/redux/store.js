import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slice/categorySlice";
import  loginSlice  from "./slice/loginSlice";

export const store = configureStore({
      reducer: {
         category: categorySlice,
        // login:  loginSlice 
    }
})