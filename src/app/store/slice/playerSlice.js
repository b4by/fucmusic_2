import { tracks } from "@/app/constants";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  selected_genre: "Pop",
  selected_track: null,
  isPlaying: false,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.selected_genre = action.payload;
    },
    chooseTrack: (state, action) => {
      if (state.selected_track === action.payload) {
        state.isPlaying = false;
        return;
      }
      state.selected_track = action.payload;
      state.isPlaying = true;
    },
    changePlayingState: (state, action) => {
      if (state.selected_track == null) {
        state.selected_track = tracks[state.selected_genre].songs[0];
        state.isPlaying = action.payload;
      }
      if (state.isPlaying) {
        state.isPlaying = action.payload;
      }
    },
    chooseNextTrack: (state, action) => {
      const playlistLength = tracks[state.selected_genre].songs.length;
      state.selected_track =
        tracks[state.selected_genre].songs[action.payload + 1];
    },
  },
});

export const { changeGenre, changePlayingState, chooseTrack } =
  playerSlice.actions;

export default playerSlice.reducer;
