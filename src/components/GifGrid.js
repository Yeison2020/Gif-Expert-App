import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";
import { getGifs } from "./helpers/getGifs";

const GifGrid = ({ category }) => {
  // For me to be able to use await I need to make my function a Async function

  const [images, setImages] = useState([]);

  // Working with use effect using setImages to display all

  useEffect(() => {
    getGifs(category).then((imgs) => setImages(imgs));
  }, [category]);

  //-------------------------------

  //---------------------------
  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};

export default GifGrid;
