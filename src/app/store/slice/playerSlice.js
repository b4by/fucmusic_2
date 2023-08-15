import { songs } from "@/app/constants";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  currentGenre: "Pop",
  currentSongIndex: 0,
  isPlaying: false,
  mute: false,
  volume: 30,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.currentGenre = action.payload;
    },
    changeSongIndex: (state, action) => {
      state.currentSongIndex = action.payload;
    },
    changePlayingState: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { changeGenre, changePlayingState, changeSongIndex } =
  playerSlice.actions;

export default playerSlice.reducer;
