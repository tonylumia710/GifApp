import React, { useState, useRef } from "react";
import { AddCategory, GifGrid } from "./components";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const GifApp = () => {
  const [categories, setCategories] = useState([]);
  const titleCategory = useRef(null)

  const handleAddCategory = (value) => {
    setCategories([value, ...categories]);
  };

  const resetCategories = () => setCategories([]);

  const remoteCategory = (nameCategory) =>
    setCategories(categories.filter((category) => category != nameCategory));

  return (
    <div>
      <div className="row justify-content-center py-4">
        {/* Titulo */}
        <p id="h1">Gif App</p>
    
        <h6>"Powered By GIPHY"</h6>
        

        {/* Input */}
        <AddCategory addCategory={handleAddCategory} reset={resetCategories} />
        {/* Listado de Gif */}

        {categories?.map((category, i) => (
          <div key={i}>
           {
            titleCategory ? (<button className="btn btn-outline-warning " onClick={() => remoteCategory(category)} id='remove'>
            Remove: {category}
          </button>) : ''
           }
            
            <GifGrid key={category} category={category} titleCategory={titleCategory}/>
          </div>
        ))}
      </div>
      
    </div>
  );
};
