import { configureStore } from "@reduxjs/toolkit";
import { playerSlice } from "./slice/playerSlice";

export const store = configureStore({
  reducer: {
    player: playerSlice.reducer,
  },
});
