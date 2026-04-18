import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slice/ui.slice";
import settingsReducer from "./slice/settingsSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
