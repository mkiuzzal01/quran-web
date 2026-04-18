
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SettingsState = {
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
      Object.assign(state, action.payload);
    },
    resetSettings: () => initialState,
  },
});

export const { updateSettings, resetSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
