import { countSlice } from "./slices/countSlice";
import * as reduxTK from "@reduxjs/toolkit";
import { combineReducers, PreloadedState } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  countStore: countSlice.reducer,
});

export const store = (preloadedState?: PreloadedState<RootState>) => {
  return reduxTK.configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};


export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<typeof rootReducer>;

export default AppStore;
