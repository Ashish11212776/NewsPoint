import React from "react";
import "./NewsCard.css";

const NewsCard = ({ newsData }) => {

  const handleClick=(e)=>{
       dispatch({ type: "DELETE", newData:  });
  }
  return (
    <div className="main">
      {newsData && newsData.map((news, index) => (
      
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
            <button className="delete" value={"DELETE"} onClick={(e)=>handleClick(e)}>Delete</button>
             <button className="edit" value={"EDIT"} onClick={(e)=>handleClick(e)}>Edit</button></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
