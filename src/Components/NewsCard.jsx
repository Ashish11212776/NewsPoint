import { useContext } from "react";
import "./NewsCard.css";
import { mycontext } from "../App";

const NewsCard = () => {
 
   const {state,dispatch}=useContext(mycontext);
  const handleClick=(e,id)=>{
       dispatch({ type:e.target.value, payload:id });
  }
  return (
    <div className="main">
      { state.map((news, index) => (
      
        <div key={index} className="news-card">
          {/* Image Section */}
          <img
            className="news-image"
            src={news.image_url || "https://via.placeholder.com/150"}
            alt="News Thumbnail"
          />
          <p>{news.url}</p>
          {/* Content Overlay */}
          <div className="news-overlay">
            <h1 className="news-title">
              {news.title || "Default Title"}
            </h1>
            <p className="news-category">Categories: {news.categories?.join(", ") || "General"}</p>
            <p className="news-locale">{news.published_at || "Unknown"}</p>
            <div className="btns">
            <button className="delete" value={"DELETE"} onClick={(e)=>handleClick(e,news.id)}>Delete</button>
             <button className="edit" value={"EDIT"} onClick={(e)=>handleClick(e)}>Edit</button></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
