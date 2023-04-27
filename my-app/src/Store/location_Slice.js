import { createSlice } from "@reduxjs/toolkit";

 const locationSlice = createSlice({
  name: "Location",
  initialState: {
    from:null,
    to: null,
    date:null,
  },
  reducers: {
    startLocation: (state, action) => {
      state.from=action.payload
    },
    endLocation: (state, action) => {
      state.to = action.payload;
    },
    dateUpdate :(state,action)=>{
      state.date = action.payload
    }
  },
})

export const {startLocation,endLocation,dateUpdate} = locationSlice.actions
export default locationSlice.reducer
