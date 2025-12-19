import { configureStore } from "@reduxjs/toolkit";
import mindReducer from "./mindslice";

export const store = configureStore({
  reducer: {
    mind: mindReducer, // 👈 这里必须叫 mind
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
