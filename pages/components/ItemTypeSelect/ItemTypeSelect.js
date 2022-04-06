

export default function ItemTypeSelect ({setType}){


  const handleOnChange = (e) => {
    setType(e.target.value)
  }


  return (
    <div className="item-select-container">
      {/* <label for="fragancias">Seleccionar Fragancia: </label> */}

      <select id="fragancias" onChange={e => handleOnChange(e)}>
        <option value="none">Seleccionar Fragancia</option>
        <option value="Vainilla">Vainilla</option>
        <option value="Frambuesa">Frambuesa</option>
        <option value="Mora">Mora</option>
        <option value="Naranja">Naranja</option>
      </select>
    </div>
  )
}