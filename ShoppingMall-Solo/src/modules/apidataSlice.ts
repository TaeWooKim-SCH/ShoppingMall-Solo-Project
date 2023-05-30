import { createSlice } from "@reduxjs/toolkit";
import ApiDataInterFace from "./apidata.interface";

interface RootState {
  products: ApiDataInterFace[];
}

const initialState: RootState = {
  products: [],
}

const apidataSlice = createSlice({
  name: "apidataSlice",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.products = action.payload;
      console.log(state.products);
    },
  }
});

export const {setData} = apidataSlice.actions;
export default apidataSlice;
