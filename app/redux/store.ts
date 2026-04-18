import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slice/ui.slice";
import settingsReducer from "./slice/settings.slice";
import { loadSettings } from "../utils/loadLocalStorage";


export const store = configureStore({
  reducer: {
    ui: uiReducer,
    settings: settingsReducer,
  },
  preloadedState: {
    settings: loadSettings(),
  },
});

store.subscribe(() => {
  if (typeof window !== "undefined") {
    const state = store.getState().settings;
    localStorage.setItem("settings", JSON.stringify(state));
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
