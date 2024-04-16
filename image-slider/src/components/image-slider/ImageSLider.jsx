import { useEffect } from "react";
import { useState } from "react";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs"
import "./ImageSLider.css";

const ImageSLider = ({ url, limit = 5 , page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlid, setCurrentSlid] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);


  const handlePrevious = ()=>{
    if(currentSlid > 0){
        setCurrentSlid(currentSlid - 1);
    }
  
  }

  const handleNext = ()=>{
    if(currentSlid < images.length - 1){
        setCurrentSlid(currentSlid + 1);
    }
  
  }
  useEffect(() => {
    if (url !== "") fetchImage();
    }, [url]);

  const fetchImage = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`)
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  };


  if (loading) return <div className="container">Loading...</div>;
  else if (errorMsg) return <div className="container">{errorMsg}</div>;

  return (
  <div className="container">
    <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePrevious}/>
    {
        images && images.length > 0 && images.map((image,index) =>(
            <img src = {image.download_url} key={image.id} alt = {image.download_url} className={currentSlid===index ? "current-image" : "current-image hide-current-image"}/>
        ) )
    }
    <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext}/>
    <span className="circle-indicators">
        {
            images && images.length > 0 && images.map((_, index) =>(
                <button className = {currentSlid === index ? "current-indicators" : "current-indicators hide-current-indicators"} key = {index} onClick={()=> setCurrentSlid(index)}></button>
            ))
        }
    </span>
  </div>
  );
};

export default ImageSLider;

// https://picsum.photos/v2/list?page=1&limit=10
//above is api for photos
