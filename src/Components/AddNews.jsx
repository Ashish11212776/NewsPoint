import  { useContext } from 'react'
import { useState } from "react";
import { mycontext } from '../App';

const AddNews = () => {
  const {dispatch}=useContext(mycontext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [id,setid]=useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();


    const newNewsItem = {
      id,
      title,
      description,
      image_url: imageUrl,
    };
 
    dispatch({ type: "ADD_NEWS",  payload: newNewsItem  });

    setTitle("");
    setDescription("");
    setImageUrl("");
  };

  return (
    <div>
      <h2>Add News</h2>
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
        <button type="submit">Add News</button>
      </form>
    </div>
  );
};

export default AddNews;