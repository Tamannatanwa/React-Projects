import { FaStar } from "react-icons/fa";
import "./style.css";
import { useState } from "react";
const StarRating = ({ noOfStars }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex)=>{
    setRating(getCurrentIndex)
  }

  const handleMouseEnter = (getCurrentIndex)=>{
    setHover(getCurrentIndex)
  }
  const handleMouseLeave = ()=>{
    setHover(rating)
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index+=1;
        return <FaStar key={index} className={index <= (hover || rating ) ? 'active':'inactive'} onClick={()=>handleClick(index)} onMouseMove={()=>handleMouseEnter(index)} onMouseLeave={()=>handleMouseLeave()} size={40}></FaStar>;
      })}
    </div>
  );
};

export default StarRating;

// ★
