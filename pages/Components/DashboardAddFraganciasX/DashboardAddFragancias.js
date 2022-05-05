import { useState } from "react";

export default function DashboardAddFragancias({setAddFragancia,pantalla}){

    const [imagen,setImagen]=useState("")

    const changeImagen = (e)=>{
        setImagen(e.target.files[0]);
    }

    return(
        <div className="add-fragancia">
            <div className="add-container">
                <p className='boton-atras' onClick={()=>{setAddFragancia(false),setImagen("")}}>ATRAS</p>
                <p>Cargar carousel</p>
                <p className="subTitulo">{pantalla}</p>
                <div className="add-foto">
                    {imagen===""?
                        <input
                            type="file"
                            name="img"
                            id="img"
                            onChange={(e) => {changeImagen(e)}}
                        />
                    :
                        <>
                            <p>Foto Cargada</p>
                            <input
                                type="file"
                                name="img"
                                id="img"
                                onChange={(e) => {changeImagen(e)}}
                            />
                        </>
                    }

                </div>
            </div>
        </div>
    )
}