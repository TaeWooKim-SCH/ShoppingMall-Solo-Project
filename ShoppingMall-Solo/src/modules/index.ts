import { configureStore } from "@reduxjs/toolkit";
import apidataSlice from "./apidataSlice";
import hamburgerSlice from "./hamburgerSlice";
import likesSlice from "./likesSlice";
import categorySlice from "./categorySlice";


const store = configureStore({
  reducer: {
    productList: apidataSlice.reducer,
    hamburger: hamburgerSlice.reducer,
    likesList: likesSlice.reducer,
    categoryList: categorySlice.reducer,
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;