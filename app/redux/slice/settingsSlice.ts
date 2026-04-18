import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SettingsState = {
  arabicFont: "amiri" | "uthmanic";
  arabicSize: number;
  translationSize: number;
};

const initialState: SettingsState = {
  arabicFont: "amiri",
  arabicSize: 28,
  translationSize: 16,
};



const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateSettings(state, action: PayloadAction<Partial<SettingsState>>) {
      localStorage.setItem("settings", JSON.stringify({...state, ...action.payload}));
      return {...state, ...action.payload};
    },
    resetSettings() {
      return initialState;
    },
  },
});

export const { updateSettings, resetSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
