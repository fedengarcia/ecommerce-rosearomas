import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';




export default function DashboardProductoItem ({producto}) {
    const [editProp, setEditProp] = useState("");

    const handleNameData = (e) => {

    }

    const handleDescriptionData = (e) => {

    }
    const handleDextraData = (e) => {

    }
    const handleCategoriaData = (e) => {

    }
    const handlePriceData = (e) => {

    }
    const handleStockData = (e) => {

    }
    console.log(producto)
    return (
        
        <div className="dash-prod-item-container">
            <div className="dash-prod-item">
                {editProp === "nombre" ? <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="nameId"  placeholder="Nombre" type="text" onChangeCapture={handleNameData}/>
                 : <p>{producto.Nombre}</p>}
                <EditTwoToneIcon fontSize="large" onClick={() => {setEditProp("nombre")}}/>
            </div>

            <div className="dash-prod-item">
                {editProp === "descripcion" ? <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="descripcionId"  placeholder="Descripcion" type="text" onChangeCapture={handleDescriptionData}/>
                 : <p>{producto.Descripcion}</p>}
                <EditTwoToneIcon fontSize="large" onClick={() => {setEditProp("descripcion")}}/>
            </div>

            <div className="dash-prod-item">
                {editProp === "dextra" ? <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="dextraId"  placeholder="Datos Extras" type="text" onChangeCapture={handleDextraData}/>
                 : <p>{producto.Dextra}</p>}
                <EditTwoToneIcon fontSize="large" onClick={() => {setEditProp("dextra")}}/>
            </div>

            <div className="dash-prod-item">
                {editProp === "categoria" ? <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="categoriaId"  placeholder="Categoria" type="text" onChangeCapture={handleCategoriaData}/>
                 : <p>{producto.Categoria}</p>}
                <EditTwoToneIcon fontSize="large" onClick={() => {setEditProp("categoria")}}/>
            </div>


            <div className="dash-prod-item">
                {editProp === "precio" ? <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="precioId"  placeholder="Precio" type="number" onChangeCapture={handlePriceData}/>
                 : <p>{producto.Precio}</p>}
                <EditTwoToneIcon fontSize="large" onClick={() => {setEditProp("precio")}}/>
            </div>

            <div className="dash-prod-item">
                {editProp === "stock" ? <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="stockId"  placeholder="Stock" type="number" onChangeCapture={handleStockData}/>
                 : <p>{producto.Stock}</p>}
                <EditTwoToneIcon fontSize="large" onClick={() => {setEditProp("stock")}}/>
            </div>
            
        </div>
)
}