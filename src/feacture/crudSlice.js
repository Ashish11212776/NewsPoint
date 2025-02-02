import { createSlice } from "@reduxjs/toolkit";

export const initialState = [
    {
      id: "1",
      image_url:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ie6ukfHHcZUw/v1/1200x800.jpg",
      description: "News 1",
      title: "News Title 1",
    },
    {
      id: "2",
      image_url: "./assets/newsimage.jpg",
      description: "News 2",
      title: "News Title 2",
    },
    {
      id: "3",
      image_url:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ie6ukfHHcZUw/v1/1200x800.jpg",
      description: "News 1",
      title: "News Title 1",
    },
    {
      id: "4",
      image_url:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ie6ukfHHcZUw/v1/1200x800.jpg",
      description: "News 1",
      title: "News Title 1",
    },
  ];
export const crudSlice=createSlice({
    name:'blogChanges',
    initialState,
    reducers:{
        ADD_NEWS: (state,action)=>{
           state.push(action.payload);
        },
        DELETE: (state, action) => {
          console.log(action.payload);
          const index = state.findIndex(item => item.id === action.payload);
          if (index !== -1) {
            state.splice(index, 1); 
          }
        }
    },
 })
 export const {ADD_NEWS,DELETE}=crudSlice.actions
 export default crudSlice.reducer