import React from "react";
import "./NewsCard.css";

const NewsCard = ({ newsData }) => {
  return (
    <>
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
            <p className="news-locale">Locale: {news.locale || "Unknown"}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default NewsCard;
