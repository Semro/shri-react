import { createSlice } from "@reduxjs/toolkit";

export type InitialState = Record<string, number>;

const initialState: InitialState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, { payload: id }) => {
      const count = state[id] || 0;
      state[id] = count + 1;
    },
    decrement: (state, { payload: id }) => {
      const count = state[id];

      if (!count) {
        return;
      }

      if (count === 1) {
        delete state[id];
        return;
      }

      state[id] = count - 1;
    },
    remove: (state, { payload: id }) => {
      delete state[id];
    },
  },
});

export default cartSlice;
export const { increment, decrement, remove } = cartSlice.actions;
