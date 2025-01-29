import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Hero from "./Components/Hero.jsx";
import NewsCard from "./Components/NewsCard.jsx";
function App() {
 const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
      //  const response = await axios.get("https://api.thenewsapi.com/v1/news/top?api_token=5le45unAd3gsS4lLT8VzoSmrXjHh0LnadDd1tEhF&locale=us&limit=15");
       setNewsData(response.data.data); 
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchNewsData(); 
  }, []); 

  return (
    <>
     <Header/>
     <Hero/>
     {newsData && <NewsCard newsData={newsData} />}
    </>
  );
}

export default App;
