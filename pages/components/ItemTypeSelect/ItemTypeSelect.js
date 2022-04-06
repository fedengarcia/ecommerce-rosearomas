import React, { useContext,useState } from "react";
import { crlContext } from "../../../context/carouselContext";

export default function ItemTypeSelect ({setType}){

  const {carouselFragancia} = useContext(crlContext);

  const handleOnChange = (e) => {
    setType(e.target.value)
  }

  return (
    <div className="item-select-container">
      <select id="fragancias" onChange={e => handleOnChange(e)}>
        <option value="none">Seleccionar Fragancia</option>
        {carouselFragancia.map((fragancia)=>(
            <option value={fragancia.Nombre}>{fragancia.Nombre}</option>
          )
        )}
      </select>
    </div>
  )
}