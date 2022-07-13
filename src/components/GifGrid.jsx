import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";
import '../styles.css'
import { useEffect } from "react";

export const GifGrid = ({category,titleCategory}) => {

  const {imagenes, loading, setImagenes} = useFetchGif(category);
  const removeById = id => setImagenes(imagenes.filter(imagen => imagen.id !== id))

  return (
    <>
        
        {!imagenes.length ? '' : <h3 ref={titleCategory} >{category}</h3>}
        
        {/* Desplegar Listado */}
        <div className="card-grid">
          {
            loading ? <h2>Cargando...</h2> :
            imagenes?.map(imagen => <GifItem key={imagen.id} imagen={imagen} removeById={removeById}/>)
          }
        </div>            
    </>
  )
}
