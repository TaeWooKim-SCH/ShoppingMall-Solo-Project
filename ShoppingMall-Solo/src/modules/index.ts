import { configureStore } from "@reduxjs/toolkit";
import ApiDataInterFace from "./apidata.interface";
import apidataSlice from "./apidataSlice";

export interface ReducerType {
  productList: {
    products: ApiDataInterFace[];
  };
}


const store = configureStore({
  reducer: {
    productList: apidataSlice.reducer,
  }
});

export default store;