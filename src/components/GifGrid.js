import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";
import { getGifs } from "../helpers/getGifs";
import "../index.css";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  //   componentDidMount, solo ejecuta la función cuando es renderizado la primera vez
  useEffect(() => {
    getGifs(category).then(setImages);
  }, [category]);

  return (
    <>
      <h3> {category}</h3>
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem {...img} key={img.id} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
