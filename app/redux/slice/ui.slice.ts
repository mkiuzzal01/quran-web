import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  settingsOpen: boolean;
}

const initialState: UIState = {
  settingsOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {

    openSettings: (state) => {
      state.settingsOpen = true;
    },
    closeSettings: (state) => {
      state.settingsOpen = false;
    },
    toggleSettings: (state) => {
      state.settingsOpen = !state.settingsOpen;
    },
  },
});

export const {
  openSettings,
  closeSettings,
  toggleSettings,
} = uiSlice.actions;

export default uiSlice.reducer;
