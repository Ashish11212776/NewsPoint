import Header from "./Components/Header";
import Hero from "./Components/Hero";
import NewsCard from "./Components/NewsCard";
import { Routes, Route } from "react-router-dom";
import { createContext, useReducer } from "react";
import Login from "./Components/Login";
import AddNews from "./Components/AddNews";





// function reducer(state, action) {
//   switch (action.type) {
//     case "ADD_NEWS":
//       console.log(action.payload)
//       return [...state, action.payload];
//     case "DELETE":
//       return state.filter((item)=>(item.id!==action.payload));
//     case "EDIT":
//       return state.fillter();
//     default:
//       return state;
//   }
// }

function App() {
  // const [state, dispatch] = useReducer(reducer, allData);

  return (
    <>
    
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <NewsCard  />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/add-news" element={<AddNews />} />
      </Routes>
    </>
  );
}

export default App;
