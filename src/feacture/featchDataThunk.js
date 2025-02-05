import { createAsyncThunk } from "@reduxjs/toolkit";

export const fData = createAsyncThunk("fData", async () => {
  try {
    const response = await fetch("/Data.json"); 

    if (!response.ok) {
      throw new Error("Response not valid");
    }

    const data = await response.json();
    console.log("Data is:", data);
    return data;

  } catch (error) {
    console.error("Server-side error:", error);
    throw error; 
  }
});
