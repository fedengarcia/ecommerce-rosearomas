import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';




export default function DashboardProductoItem ({producto}) {
    const [editProp, setEditProp] = useState("");
    const [data,setData] = useState("");


    const handleChangeData = (e) => {
        setData(e.target.value)
    }

    const handleConfirm = () => {
        console.log("TU DATO A CAMBIAR ES", data);
        console.log("TU DATO A CAMBIAR ES", editProp)
    }

    return (
        
        <div className="dash-prod-item-container">
            <div className="dash-prod-item">
                <div className='img-dash-prod-item dash-prod-item-box'>IMAGEN</div>

                <div className='title-description-dash-prod-item dash-prod-item-box'>
                    <div>
                        <h5>NombreE: </h5>
                        {editProp === "nombre" ? <TextField className="title-dash-prod-item" size="medium" autoComplete="off" color="secondary"  id="nameId"  placeholder="Nombre" type="text" onChangeCapture={handleChangeData}/>
                        : <h5>{producto.Nombre}</h5>}
                        
                        {editProp !== "nombre" ? <EditTwoToneIcon fontSize="large" onClick={() => {setEditProp("nombre")}}/>
                        : <div>
                            <CheckCircleOutlineOutlinedIcon onClick={handleConfirm}/>
                            <CancelOutlinedIcon onClick={()=> {setEditProp(""); setData("")}}/>
                        </div>
                        } 
                    </div>

                    <div>
                        <h5>Descripcion: </h5>
                        {editProp === "descripcion" ? <TextField className="form-input" multiline rows={4} size="medium" autoComplete="off" color="secondary"  id="descripcionId"  placeholder="Descripcion" type="text" onChangeCapture={handleChangeData}/>
                            : <h5>{producto.Descripcion}</h5>}
                        {editProp !== "descripcion" ? <EditTwoToneIcon fontSize="large" onClick={() => {setEditProp("descripcion")}}/>
                        : <div>
                            <CheckCircleOutlineOutlinedIcon onClick={handleConfirm}/>
                            <CancelOutlinedIcon onClick={()=> {setEditProp(""); setData("")}}/>
                            </div>
                        } 
                    </div>
            
                </div>

                <div className='rest-dash-prod-item dash-prod-item-box'>

                    <div>
                        <h5>Categoria: </h5>
                        {editProp === "categoria" ? <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="categoriaId"  placeholder="Categoria" type="text" onChangeCapture={handleChangeData}/>
                        : <h5>{producto.Categoria}</h5>}

                       {editProp !== "categoria" ? <EditTwoToneIcon fontSize="large" onClick={() => {setEditProp("categoria")}}/>
                        : <div>
                            <CheckCircleOutlineOutlinedIcon onClick={handleConfirm}/>
                            <CancelOutlinedIcon onClick={()=> {setEditProp(""); setData("")}}/>
                            </div>
                        } 
                    </div>

                    <div>
                        <h5>Precio: $ </h5>
                        {editProp === "precio" ? <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="precioId"  placeholder="Precio" type="number" onChangeCapture={handleChangeData}/>
                        : <h5>{producto.Precio}</h5>}
                        {editProp !== "precio" ? <EditTwoToneIcon fontSize="large" onClick={() => {setEditProp("precio")}}/>
                        : <div>
                            <CheckCircleOutlineOutlinedIcon onClick={handleConfirm}/>
                            <CancelOutlinedIcon onClick={()=> {setEditProp(""); setData("")}}/>
                            </div>
                        } 
                    </div>

                    <div>
                        <h5>Stock: </h5>
                        {editProp === "stock" ? <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="stockId"  placeholder="Stock" type="number" onChangeCapture={handleChangeData}/>
                        : <h5>{producto.Stock}</h5>}
                        {editProp !== "stock" ? <EditTwoToneIcon fontSize="large" onClick={() => {setEditProp("stock")}}/>
                        : <div>
                            <CheckCircleOutlineOutlinedIcon onClick={handleConfirm}/>
                            <CancelOutlinedIcon onClick={()=> {setEditProp(""); setData("")}}/>
                            </div>
                        } 
                    </div>
                    
                </div>
            </div>

        
            
        </div>
)
}