import { useState } from "react"

export default function Dashboard({}){

    const [login, setLogin]=useState(true)

    const loginExito=(usuario,contraseña)=>{
        if(usuario==="Caro" & contraseña==="1"){
            setLogin(!login)
        }
    }

    return(
        <>
            {login?
                <div className="logeo-block">
                    <div className="logeo-container">
                        <label form="usuario">USUARIO:</label>
                        <input placeholder="Usuario" name="usuario" id="usuario"/>
                        <label form="contraseña">CONTRASEÑA:</label>
                        <input placeholder="Contraseña" name="contraseña" id="contraseña"/>
                        <div className="container-logeo-button">
                            <p onClick={()=>{loginExito(usuario.value,contraseña.value)}}>CONFIRMAR</p>
                        </div>
                    </div>
                </div>
                :
                <></>
            }
        </>    
    )
}