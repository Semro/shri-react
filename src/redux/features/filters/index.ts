import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  name: string | null;
  genre: string | null;
  cinema: string | null;
}

const initialState: InitialState = {
  name: null,
  genre: null,
  cinema: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterMovie(state, { payload }) {
      state.name = payload === "" ? null : payload;
    },
    setFilterGenre(state, { payload }) {
      state.genre = payload;
    },
    setFilterCinema(state, { payload }) {
      state.cinema = payload;
    },
  },
});

export default filtersSlice;
export const { setFilterMovie, setFilterGenre, setFilterCinema } =
  filtersSlice.actions;
