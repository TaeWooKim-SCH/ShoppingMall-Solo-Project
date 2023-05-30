import { createSlice } from '@reduxjs/toolkit';

interface RootState {
  isDrop: boolean;
}

const initialState: RootState = {
  isDrop: false,
}

const hamburgerSlice = createSlice({
  name: "hamburgerSlice",
  initialState,
  reducers: {
    setIsDrop: state => {
      if (state.isDrop) {
        state.isDrop = false;
      }
      else {
        state.isDrop = true;
      }
    }
  }
})

export const {setIsDrop} = hamburgerSlice.actions;
export default hamburgerSlice;