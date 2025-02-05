import Header from "./Components/Header";
import Hero from "./Components/Hero";
import NewsCard from "./Components/NewsCard";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import AddNews from "./Components/AddNews";
import EditNews from "./Components/EditNews";
import { fData } from "./feacture/featchDataThunk";
import { useDispatch } from "react-redux";
import { useEffect } from "react";



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
   const dispatch=useDispatch();
  useEffect(() => {
    dispatch(fData()); // Dispatch the thunk to fetch the data
  }, [dispatch]);
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
        <Route path="/edit" element={<EditNews/>}/>
      </Routes>
    </>
  );
}

export default App;
