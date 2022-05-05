import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { addStorage, editPropProduct, removeProduct } from '../../../firebaseX/Firebase';
import Image from "next/image";



export default function DashboardProductoItem ({producto,setReload, reload}) {
    const [propType, setPropType] = useState("");
    const [data,setData] = useState("");
    const [disp,setDisp]=useState("none");

    const changeImagen = (e)=>{
        addStorage(producto.Nombre,"productos",e.target.files[0]).then(res => {
            editPropProduct(producto.id,"imagen",res).then(res=>{
                setReload(!reload);
            })
        });
    }

    const handleChangeData = (e) => {
        setData(e.target.value)
    }

    const handleConfirm = () => {

        editPropProduct(producto.id,propType,data).then(res => {
            setPropType("");
            setReload(!reload);

        });

    }


    const handleRemoveProduct = () => {
        removeProduct(producto.id).then(res => {
            setReload(!reload);
        })
    }

    return (
        <>
            {producto === undefined ? <></> :
            <div className="dash-prod-item-container">
                <div className="dash-prod-item">
                    <div className='img-dash-prod-item dash-prod-item-box'>
                        <Image src={producto.Img} alt={"imagen del producto"} width={200} height={200}/>
                        <input
                            type="file"
                            name="img"
                            id="img"
                            accept="image/jpg"
                            onChange={(e) => {changeImagen(e)}}
                        />
                    </div>

                    <div className='dash-prod-item-box'>
                        <div>
                            <h5>Nombre: </h5>
                            {propType === "nombre" ? <TextField className="title-dash-prod-item" size="medium" autoComplete="off" color="secondary"  id="nameId"  placeholder="Nombre" type="text" onChangeCapture={handleChangeData}/>
                            : <h5>{producto.Nombre}</h5>}
                            
                            {propType !== "nombre" ? <EditTwoToneIcon fontSize="large" onClick={() => {setPropType("nombre")}}/>
                            : <div>
                                <CheckCircleOutlineOutlinedIcon onClick={handleConfirm}/>
                                <CancelOutlinedIcon onClick={()=> {setPropType(""); setData("")}}/>
                            </div>
                            } 
                        </div>

                        <div>
                            <h5>Descripcion: </h5>
                            {propType === "descripcion" ? <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="descripcionId"  placeholder="Descripcion" type="text" onChangeCapture={handleChangeData}/>
                                : <h5>{producto.Descripcion}</h5>}
                            {propType !== "descripcion" ? <EditTwoToneIcon fontSize="large" onClick={() => {setPropType("descripcion")}}/>
                            : <div>
                                <CheckCircleOutlineOutlinedIcon onClick={handleConfirm}/>
                                <CancelOutlinedIcon onClick={()=> {setPropType(""); setData("")}}/>
                                </div>
                            } 
                        </div>
                
                    </div>

                    <div className='dash-prod-item-box'>

                        <div>
                            <h5>Categoria: </h5>
                            {propType === "categoria" ? <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="categoriaId"  placeholder="Categoria" type="text" onChangeCapture={handleChangeData}/>
                            : <h5>{producto.Categoria}</h5>}

                        {propType !== "categoria" ? <EditTwoToneIcon fontSize="large" onClick={() => {setPropType("categoria")}}/>
                            : <div>
                                <CheckCircleOutlineOutlinedIcon onClick={handleConfirm}/>
                                <CancelOutlinedIcon onClick={()=> {setPropType(""); setData("")}}/>
                                </div>
                            } 
                        </div>

                        <div>
                            <h5>Precio: $ </h5>
                            {propType === "precio" ? <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="precioId"  placeholder="Precio" type="number" onChangeCapture={handleChangeData}/>
                            : <h5>{producto.Precio}</h5>}
                            {propType !== "precio" ? <EditTwoToneIcon fontSize="large" onClick={() => {setPropType("precio")}}/>
                            : <div>
                                <CheckCircleOutlineOutlinedIcon onClick={handleConfirm}/>
                                <CancelOutlinedIcon onClick={()=> {setPropType(""); setData("")}}/>
                                </div>
                            } 
                        </div>

                        <div>
                            <h5>Stock: </h5>
                            {propType === "stock" ? <TextField className="form-input" size="medium" autoComplete="off" color="secondary"  id="stockId"  placeholder="Stock" type="number" onChangeCapture={handleChangeData}/>
                            : <h5>{producto.Stock}</h5>}
                            {propType !== "stock" ? <EditTwoToneIcon fontSize="large" onClick={() => {setPropType("stock")}}/>
                            : <div>
                                <CheckCircleOutlineOutlinedIcon onClick={handleConfirm}/>
                                <CancelOutlinedIcon onClick={()=> {setPropType(""); setData("")}}/>
                                </div>
                            } 
                        </div>

                    </div>
                    
                    <div className='dash-prod-item-box delete-item-box'>
                        <button onClick={()=> setDisp("block")}>ELIMINAR PRODUCTO</button>
                    </div>
                </div>
            </div>
            
            }

            <div className='fondo-block' style={{display:disp, zIndex:'5'}}>
                <div className='confirm-cancel-info'>
                    <p className='button-borrar-order' onClick={()=>{handleRemoveProduct,setDisp("none")}}>Confirmar</p>
                    <p className='button-borrar-order' onClick={()=>{setDisp("none")}}>Cancelar</p>
                </div>
            </div>

        </>
        
)
}