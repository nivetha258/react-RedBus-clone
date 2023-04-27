import { configureStore } from "@reduxjs/toolkit";
import Location from "./location_Slice";

 
export const store = configureStore({
    reducer:{
        travel : Location
    }
})