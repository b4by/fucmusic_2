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
    changeCurrentGenre: (state, action) => {
      state.currentGenre = action.payload;
    },
    changeCurrentSongIndex: (state, action) => {
      state.currentSongIndex = action.payload;
    },
    changePlayingState: (state, action) => {
      state.isPlaying = action.payload;
    },
    changeMuteState: (state, action) => {
      state.mute = action.payload;
    },
    changeVolume: (state, action) => {
      state.volume = action.payload;
    },
  },
});

export const {
  changeCurrentGenre,
  changeCurrentSongIndex,
  changePlayingState,
  changeMuteState,
  changeVolume,
} = playerSlice.actions;

export default playerSlice.reducer;
