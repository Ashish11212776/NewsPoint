import { createSlice } from "@reduxjs/toolkit";
import { fData } from "./featchDataThunk";

export const initialState = {
  Data: [],
  isLoading: false,
};

export const crudSlice = createSlice({
  name: "blogChanges",
  initialState,
  reducers: {
    ADD_NEWS: (state, action) => {
      state.Data.push(action.payload);
    },
    DELETE: (state, action) => {
      const index = state.Data.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.Data.splice(index, 1);
      }
    },
    EDIT: (state, action) => {
      const index = state.Data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.Data[index] = action.payload;
      }
    },
  },
  // **Move extraReducers out of reducers** - they should be at this level
  extraReducers: (builder) => {
    builder.addCase(fData.pending, (state) => {
      console.log("Fetching data...");
      state.isLoading = true;
    });
    builder.addCase(fData.fulfilled, (state, action) => {
      console.log("Data fetched:", action.payload);
      state.Data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fData.rejected, (state, action) => {
      console.log("Error fetching data:", action.error);
      state.isLoading = false;
    });
  },
});

export const { ADD_NEWS, DELETE, EDIT } = crudSlice.actions;
export default crudSlice.reducer;
