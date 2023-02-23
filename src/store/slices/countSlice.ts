import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type CountType = {
  count: number;
};

const defaultValue: CountType = { count: 0 };

export const countSlice = createSlice({
  name: "count",
  initialState: defaultValue,
  reducers: {
    add: (state, action: PayloadAction<void>) => {
      state.count = state.count + 1;
    },
    reset: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { add, reset } = countSlice.actions;
export default countSlice.reducer;
