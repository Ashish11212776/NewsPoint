
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EDIT } from '../feacture/crudSlice.js'; 

const EditNews = () => {
 const urlParams = new URLSearchParams(window.location.search);
 const id = urlParams.get('id');
  const dispatch = useDispatch();
  
  
  //   const state = useSelector((state) => state); // Access the whole Redux state
  // console.log("Current Redux State:", state);       for testing
  
  const newsItem = useSelector((state) =>
    state.crudSliceReducer.Data.find((item) => item.id === id)
  );

  const [title, setTitle] = useState(newsItem ? newsItem.title : "");
  const [description, setDescription] = useState(newsItem ? newsItem.description : "");
  const [imageUrl, setImageUrl] = useState(newsItem ? newsItem.image_url : "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedNewsItem = {
      id,
      title,
      description,
      image_url: imageUrl,
    };

    // Dispatch the EDIT action to update the news item
    dispatch(EDIT(updatedNewsItem));
  };

  return (
    <div>
      <h2>Edit News</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
        />
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Enter Image URL"
        />
        <button type="submit">Update News</button>
      </form>
    </div>
  );
};

export default EditNews;
