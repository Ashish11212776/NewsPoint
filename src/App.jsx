import Header from "./Components/Header";
import Hero from "./Components/Hero";
import NewsCard from "./Components/NewsCard";
import { Routes, Route } from "react-router-dom";
import { createContext, useReducer } from "react";
import Login from "./Components/Login";
import AddNews from "./Components/AddNews";

export const mycontext= createContext();

const allData = [
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

function reducer(state, action) {
  switch (action.type) {
    case "ADD_NEWS":
      console.log(action.payload)
      return [...state, action.payload];
    case "DELETE":
      return state.filter((item)=>(item.id!==action.payload));
    case "EDIT":
      return state.fillter();
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, allData);

  return (
    <>
    <mycontext.Provider value={{dispatch,state}}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <NewsCard newsData={state} dispatch={dispatch} />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/add-news" element={<AddNews />} />
      </Routes>
      </mycontext.Provider>
    </>
  );
}

export default App;
