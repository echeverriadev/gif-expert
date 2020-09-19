import React, { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
  //   const categories = ["dragon ball", "samurai x", "death note"];
  const [categories, setCategories] = useState([
    "dragon ball",
    "samurai x",
    "death note",
  ]);

  // const handleAdd = () => {
  // setCategories([...categories, "one punch"]);
  //   setCategories((cats) => [...cats, "one punch"]);
  // };

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}> Agregar </button> */}
      <ol>
        {categories.map((category) => {
          return <li key={category}> {category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
