import { createSlice } from "@reduxjs/toolkit";
import ApiDataInterFace from "./apidata.interface";

const initialState: ApiDataInterFace[] = [];

const likesSlice = createSlice({
  name: "likesSlice",
  initialState,
  reducers: {
    setCartList: (state, action) => {
      if (action.payload.bookmark) {
        return [...state, action.payload];
      }
      else {
        return state.filter((like) => like.id !== action.payload.id)
      }
    }
  }
})

export const {setCartList} = likesSlice.actions; 
export default likesSlice;