import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  // For me to be able to use await I need to make my function a Async function

  const [images, setImages] = useState([]);

  // Working with use effect
  useEffect(() => {
    getGifs();
  }, []);

  //-------------------------------
  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?api_key=iFSlLsxHOes7vH9IQw3NV9x457OJRzZy&q=Rick and Morty&limit=10";

    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    console.log(gifs);
    setImages(gifs);
  };

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
