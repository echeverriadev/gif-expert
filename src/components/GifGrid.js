import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  //   componentDidMount, solo ejecuta la función cuando es renderizado la primera vez
  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q='Rick and Morty'&limit=10&api_key=DhzqoQoGXbCoG4tw0LZmc4I18ySU6n86";
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
      <h3> {category}</h3>
      {images.map((img) => (
        <GifGridItem {...img} key={img.id} />
      ))}
    </>
  );
};

export default GifGrid;
