import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SettingsState = {
  arabicFont: "amiri" | "cairo";
  arabicSize: number;
  translationSize: number;
};

const defaultState: SettingsState = {
  arabicFont: "cairo",
  arabicSize: 28,
  translationSize: 18,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: defaultState,
  reducers: {
    updateSettings(state, action: PayloadAction<Partial<SettingsState>>) {
      return { ...state, ...action.payload };
    },
    resetSettings() {
      return defaultState;
    },
  },
});

export const { updateSettings, resetSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
