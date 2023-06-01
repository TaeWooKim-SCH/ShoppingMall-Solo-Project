import { configureStore } from "@reduxjs/toolkit";
import apidataSlice from "./apidataSlice";
import hamburgerSlice from "./hamburgerSlice";
import CartSlice from "./cartSlice";


const store = configureStore({
  reducer: {
    productList: apidataSlice.reducer,
    hamburger: hamburgerSlice.reducer,
    cartList: CartSlice.reducer,
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;