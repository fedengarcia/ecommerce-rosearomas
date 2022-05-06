import { useState } from "react"
import TextField from '@material-ui/core/TextField';


export default function DashboardAddProducto ({disp,setDisp}) {
    const [producto,setProducto] = useState ({})


    const handleData = (e,dataType) => {
        
        if(dataType === "imagen"){
            setProducto({...producto,img: e.target.value})
        }
        if(dataType === "nombre"){
            setProducto({...producto,nombre: e.target.value})
        }
        if(dataType === "descripcion"){
            setProducto({...producto,descripcion: e.target.value})
        }
        if(dataType === "categoria"){
            setProducto({...producto,categoria: e.target.value})
        }
        if(dataType === "precio"){
            setProducto({...producto,precio: e.target.value})
        }
        if(dataType === "stock"){
            setProducto({...producto,stock: e.target.value})
        }
    }

    const handleAccept = () => {

    }


    return (
        <div className='fondo-block' style={{display:disp}}>
          <div className='add-producto-container'>
            <div className='form-container'>
                <div>
                    <h5>Imagen: </h5>
                    <input type="file" name="img" id="img" accept="image/png" onChange={(e) => handleData(e,"imagen")}/>
                </div>
                
                <div>
                    <h5>Nombre: </h5>
                    <TextField className="textfield-prod" size="medium" autoComplete="off" color="secondary"  id="nameId"  placeholder="Nombre" type="text" onChangeCapture={(e) => handleData(e,"nombre")}/>
                </div>

                <div>
                    <h5>Descripcion: </h5>
                    <TextField className="textfield-prod" size="medium" autoComplete="off" color="secondary"  id="nameId"  placeholder="Descripcion" type="text" onChangeCapture={(e) => handleData(e,"descripcion")}/>
                </div>
            
                <div>
                    <h5>Categoria: </h5>
                    <TextField className="textfield-prod" size="medium" autoComplete="off" color="secondary"  id="nameId"  placeholder="Categoria" type="text" onChangeCapture={(e) => handleData(e,"categoria")}/>
                </div>
            
                <div>
                    <h5>Precio: $</h5>
                    <TextField className="textfield-prod" size="medium" autoComplete="off" color="secondary"  id="nameId"  placeholder="Precio" type="text" onChangeCapture={(e) => handleData(e,"precio")}/>
                </div>

                <div>
                    <h5>Stock: </h5>
                    <TextField className="textfield-prod" size="medium" autoComplete="off" color="secondary"  id="nameId"  placeholder="Stock" type="text" onChangeCapture={(e) => handleData(e,"stock")}/>
                </div>
            
            </div>
            <div className="actions-addproduct">
                <button onClick={()=>{setDisp("none")}}>CANCELAR</button>
                <button onClick={handleAccept}>AGREGAR</button>
            </div>
          </div>
        </div>
    )
}