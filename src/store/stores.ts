import { countSlice } from "./slices/countSlice";
import * as reduxTK from "@reduxjs/toolkit";

const store = reduxTK.configureStore({
  reducer: {
    countStore: countSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
