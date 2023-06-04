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
    },
    setDataElement: (state, action) => {
      const bookmarkIndex: number = state.products.findIndex((data) => data.id === action.payload.id)
      state.products[bookmarkIndex] = action.payload;
    },
  }
});

export const {setData, setDataElement} = apidataSlice.actions;
export default apidataSlice;
