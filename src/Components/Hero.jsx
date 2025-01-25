import './Hero.css'
import NewsCard from './NewsCard.jsx';
const Hero=()=>{
    const category=["Home","Trending","Favraute","Latest","About"]
  return (
    <>
    <div className="hero-container">
        <div className="category">
            {
               category.map((item,index)=>(
                  <a key={index} id='tag' href="#">{item}</a>
              ))
            }
        </div>
    </div>
     
    </>
  )
};
export default Hero;