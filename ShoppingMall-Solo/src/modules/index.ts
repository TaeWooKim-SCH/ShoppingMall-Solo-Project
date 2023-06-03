import { configureStore } from "@reduxjs/toolkit";
import apidataSlice from "./apidataSlice";
import hamburgerSlice from "./hamburgerSlice";
import cartSlice from "./cartSlice";
import categorySlice from "./categorySlice";


const store = configureStore({
  reducer: {
    productList: apidataSlice.reducer,
    hamburger: hamburgerSlice.reducer,
    cartList: cartSlice.reducer,
    categoryList: categorySlice.reducer,
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;