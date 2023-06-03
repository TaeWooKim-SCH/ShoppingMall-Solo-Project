import { createSlice } from "@reduxjs/toolkit";
import ApiDataInterFace from "./apidata.interface";

const initialState: ApiDataInterFace[] = [];

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      return action.payload;
    },
    setCategoryElement: (state, action) => {
      const bookmarkIndex: number = state.findIndex((data) => data.id === action.payload.id)
      state[bookmarkIndex] = action.payload;
    },
  }
})

export const {setCategory, setCategoryElement} = categorySlice.actions;
export default categorySlice;