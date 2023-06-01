import { createSlice } from "@reduxjs/toolkit";
import ApiDataInterFace from "./apidata.interface";

const initialState: ApiDataInterFace[] = [];

const CartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    setCartList: (state, action) => {
      if (action.payload.bookmark) {
        return [...state, action.payload];
      }
      else {
        return state.filter((cart) => cart.id !== action.payload.id)
      }
    }
  }
})

export const {setCartList} = CartSlice.actions; 
export default CartSlice