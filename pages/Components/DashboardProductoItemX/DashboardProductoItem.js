import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';




export default function DashboardProductoItem ({producto}) {
    const [editProp, setEditProp] = useState("");

    const handleNameData = () => {

    }

    const handleCategoriaData = () => {

    }
    return (
        <div className="dash-prod-item-container">
            <div className="dash-prod-item">
                {editProp === "nombre" ? <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="nameId"  placeholder="Nombre" type="text" onChangeCapture={handleNameData}/>
                 : <h2>{producto.Nombre}</h2>}
                <EditTwoToneIcon fontSize="large" onClick={() => {setEditProp("nombre")}}/>
            </div>

            <div className="dash-prod-item">
                {editProp === "categoria" ? <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="categoriaId"  placeholder="Categoria" type="text" onChangeCapture={handleCategoriaData}/>
                 : <h2>{producto.Categoria}</h2>}
                <EditTwoToneIcon fontSize="large" onClick={() => {setEditProp("categoria")}}/>
            </div>
            
        </div>
)
}