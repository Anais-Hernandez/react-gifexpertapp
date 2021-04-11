import React, { useState } from "react";
import { AddCaterigory } from "./components/AddCaterigory";
import { GifGird } from "./components/GifGird";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  return (
    <>
      <h2>GifsSearch</h2>
      <hr />

      <AddCaterigory setCategories={setCategories} />

      <ol>
        {categories.map((category) => (
          <GifGird key={category} category={category}></GifGird>
        ))}
      </ol>
    </>
  );
};
