import "./NewsCard.css";
import { useSelector, useDispatch } from "react-redux";
import { DELETE } from "../feacture/crudSlice";
import { NavLink } from "react-router-dom";


const NewsCard = () => {
  const state = useSelector((state) => state.crudSliceReducer);
  const dispatch = useDispatch();

  

  
  const handleClick = (e, id) => {
    dispatch(DELETE(id));
  };
  return (
    <div className="main">
      {state.Data.map((news, index) => (
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
            <h1 className="news-title">{news.title || "Default Title"}</h1>
            <p className="news-category">
              Categories: {news.categories?.join(", ") || "General"}
            </p>
            <p className="news-locale">{news.published_at || "Unknown"}</p>
            <div className="btns">
              <button
                className="delete"
                value={"DELETE"}
                onClick={(e) => handleClick(e, news.id)}
              >
                Delete
              </button>
              <NavLink to={`/edit?id=${news.id}`}>
                <button
                  className="edit"
                  value={"EDIT"}
                  onClick={(e) => handleClick(e)}
                >
                  Edit
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
