import { useEffect, useState, useContext } from "react"
import { crlContext } from "../../../Context/CarouselContext"
import Image from "next/image"
import { FormCheck,Form } from "react-bootstrap"
import { changeStockFragancia, removeFragancia } from "../../../firebaseX/Firebase"

export default function DashboardFragancias () {

    const {carouselFragancia, carouselFraganciaSML}=useContext(crlContext)

    const [fraganciaEliminar,setFraganciaEliminar]=useState("")
    const [docEliminar,setDocEliminar]=useState("")

    const [disp,setDisp]=useState("none")

    const disponibilidad = (e)=>{
        changeStockFragancia(e.target.name,e.target.checked)
    }

    return (
        <>
            <div className="dashboard-fragancias">
                <h1>Fragancias</h1>
                <div className="tipo-pantalla">
                    <h2>Fragancias Pantalla Grande</h2>
                    <p className="agregar-frg">+</p>
                </div>
                <br/>
                <div className="fragancia-container">
                    {carouselFragancia.map(img=>(
                        <div key={img.id} className="linea-fragancia">
                            <p>{img.Nombre}</p>
                            <p className="borrar-fragancia" onClick={()=>{setFraganciaEliminar(img.id),setDocEliminar("CarouselFragancias"),setDisp("block")}}>X</p>
                            <div className="foto-stock">
                                <Image src={img.img} width={800} height={170} alt={img.Nombre}/>
                                <div>
                                    <p>Disponible:</p>
                                    <label className="switch">
                                        <input type={"checkbox"} name={img.id} id={img.id} onClick={disponibilidad} defaultChecked={img.stock?true:false}/>
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="tipo-pantalla">
                    <h2>Fragancias Pantalla Chica</h2>
                    <p className="agregar-frg-2">+</p>
                </div>
                <br/>
                <div className="fragancia-container">
                    {carouselFraganciaSML.map(img=>(
                        <div key={img.id} className="linea-fragancia">
                            <p>{img.Nombre}</p>
                            <p className="borrar-fragancia" onClick={()=>{setFraganciaEliminar(img.id),setDocEliminar("CarouselFraganciasSML"),setDisp("block")}}>X</p>
                            <div className="foto-stock">
                                <Image src={img.img} width={400} height={300} alt={img.Nombre}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='fondo-block' style={{display:disp}}>
                <div className='confirm-cancel-info'>
                    <p className='button-borrar-order' onClick={()=>{removeFragancia(fraganciaEliminar,docEliminar),setDisp("none")}}>Confirmar</p>
                    <p className='button-borrar-order' onClick={()=>{setDisp("none")}}>Cancelar</p>
                </div>
            </div>
        </>
    )
}